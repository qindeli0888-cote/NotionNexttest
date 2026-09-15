import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

const NavigationCard = ({ item }) => (
  <SmartLink href={item.href} className='lily-os-nav-card'>
    <span className='lily-os-nav-icon' aria-hidden='true'>
      {item.icon}
    </span>
    <span>
      <strong>{item.title}</strong>
      <small>{item.description}</small>
    </span>
    <span className='lily-os-nav-arrow' aria-hidden='true'>
      ↗
    </span>
  </SmartLink>
)

const ProjectCard = ({ project, index }) => (
  <article className='lily-os-project-card'>
    <div className='lily-os-project-topline'>
      <span className='lily-os-project-number'>0{index + 1}</span>
      <span className='lily-os-priority'>{project.priority}</span>
    </div>
    <h3>
      {project.href ? (
        <SmartLink href={project.href}>{project.project}</SmartLink>
      ) : (
        project.project
      )}
    </h3>
    <p>{project.category}</p>
    <div className='lily-os-progress' aria-label={`进度 ${project.progress}%`}>
      <span style={{ width: `${project.progress}%` }} />
    </div>
    <div className='lily-os-project-meta'>
      <span>{project.status}</span>
      <span>{project.progress}%</span>
    </div>
    <div className='lily-os-next-action'>
      <small>Next Action</small>
      <strong>{project.nextAction}</strong>
    </div>
  </article>
)

/**
 * Lily OS homepage shell. The project cards are presentation-only and do not
 * change the public Notion article database used by NotionNext.
 */
const LilyOSHome = ({ projects = [] }) => {
  const notionProjectNames = new Set(projects.map(project => project.project))
  const projectSource = [
    ...projects,
    ...CONFIG.LILY_OS_PROJECTS.filter(
      project => !notionProjectNames.has(project.project)
    )
  ]
  const activeProjects = projectSource.filter(
    project =>
      project.featured !== false &&
      project.priority === 'P1' &&
      !['完成', '已完成', 'Completed', 'Done', 'Archived'].includes(
        project.status
      )
  )

  return (
    <div className='lily-os-home'>
      <section className='lily-os-hero' aria-labelledby='lily-os-title'>
        <div className='lily-os-eyebrow'>
          LILY&apos;S CREATIVE OPERATING SYSTEM
        </div>
        <h1 id='lily-os-title'>{CONFIG.LILY_OS_TITLE}</h1>
        <p>{CONFIG.LILY_OS_SUBTITLE}</p>
        <div className='lily-os-hero-footer'>
          <span>Make ideas visible.</span>
          <a href='#active-projects'>查看进行中的项目 ↓</a>
        </div>
      </section>

      <nav className='lily-os-navigation' aria-label='Lily OS 模块导航'>
        {CONFIG.LILY_OS_NAVIGATION.map(item => (
          <NavigationCard key={item.title} item={item} />
        ))}
      </nav>

      <section id='active-projects' className='lily-os-projects'>
        <div className='lily-os-section-heading'>
          <div>
            <span>NOW IN MOTION</span>
            <h2>🔥 Active Projects</h2>
          </div>
          <p>只展示当前 P1 项目</p>
        </div>
        <div className='lily-os-project-grid'>
          {activeProjects.map((project, index) => (
            <ProjectCard
              key={project.project}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default LilyOSHome
