const firstValue = value => (Array.isArray(value) ? value[0] : value)

const textValue = value => {
  const resolved = firstValue(value)
  return resolved === undefined || resolved === null
    ? ''
    : String(resolved).trim()
}

const booleanValue = value => {
  if (typeof value === 'boolean') return value
  if (typeof value === 'number') return value === 1
  return ['true', 'yes', '1', 'checked', '是', '已勾选'].includes(
    textValue(value).toLowerCase()
  )
}

const progressValue = value => {
  const matched = textValue(value).match(/\d+(?:\.\d+)?/)
  if (!matched) return 0
  return Math.min(100, Math.max(0, Math.round(Number(matched[0]))))
}

/**
 * Read Lily OS project metadata from pages in the existing Notion database.
 * English and Chinese aliases are supported so the public article fields do
 * not need to be renamed.
 */
export const getNotionProjects = allPages =>
  (allPages || [])
    .map(page => {
      const hasProjectMetadata = Boolean(
        page.Project ||
          page['项目名称'] ||
          page.Priority ||
          page['优先级'] ||
          page.Featured ||
          page['首页展示'] ||
          page.Status ||
          page.ProjectStatus ||
          page['Project Status'] ||
          page['项目状态']
      )
      const project = textValue(
        page.Project || page.project || page['项目名称'] || page.title
      )
      const status = textValue(
        page.Status ||
          page.ProjectStatus ||
          page['Project Status'] ||
          page['项目状态']
      )
      const category = textValue(
        page.Category ||
          page.ProjectCategory ||
          page['Project Category'] ||
          page['项目分类'] ||
          page.category
      )
      const priority = textValue(page.Priority || page['优先级']).toUpperCase()
      const nextAction = textValue(
        page['Next Action'] || page.NextAction || page['下一步行动']
      )

      return {
        project,
        status,
        category,
        priority,
        progress: progressValue(page.Progress || page['进度']),
        nextAction,
        featured: booleanValue(page.Featured || page['首页展示']),
        startDate:
          page['Start Date'] || page.StartDate || page['开始日期'] || '',
        href: ['Published', 'Invisible'].includes(page.status)
          ? page.href || ''
          : '',
        cover: page.pageCoverThumbnail || page.pageCover || '',
        hasProjectMetadata
      }
    })
    .filter(project => project.project && project.hasProjectMetadata)
    .map(({ hasProjectMetadata, ...project }) => project)
