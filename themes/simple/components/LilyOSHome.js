import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

const NavigationCard = ({ item }) => (
  <SmartLink href={item.href} className='lily-os-nav-card'>
    <span className='lily-os-nav-content'>
      <span className='lily-os-nav-icon' aria-hidden='true'>
        {item.icon}
      </span>
      <span>
        <strong>{item.title}</strong>
        <small>{item.description}</small>
      </span>
    </span>
    <span className='lily-os-nav-arrow' aria-hidden='true'>
      →
    </span>
  </SmartLink>
)

const ProjectCard = ({ project, index }) => (
  <article className='lily-os-project-card'>
    <div className='lily-os-project-topline'>
      <span className='lily-os-project-number'>
        PRJ-{String(index + 1).padStart(2, '0')}
      </span>
      <span className='lily-os-project-state'>
        <i aria-hidden='true' /> {project.status}
      </span>
    </div>
    <h3>
      {project.href ? (
        <SmartLink href={project.href}>{project.project}</SmartLink>
      ) : (
        project.project
      )}
    </h3>
    <div className='lily-os-project-labels'>
      <span>{project.priority}</span>
      <span>{project.category}</span>
    </div>
    <div className='lily-os-progress' aria-label={`进度 ${project.progress}%`}>
      <span style={{ width: `${project.progress}%` }} />
    </div>
    <div className='lily-os-project-meta'>
      <span>Progress</span>
      <strong>{project.progress}%</strong>
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
  const activeProjects = projects.filter(
    project =>
      project.featured !== false &&
      project.priority === 'P1' &&
      !['完成', '已完成', 'Completed', 'Done', 'Archived'].includes(
        project.status
      )
  )

  const visibleProjects = activeProjects.slice(0, 3)

  return (
    <div className='lily-os-home'>
      <section className='lily-os-hero' aria-labelledby='lily-os-title'>
        <div className='lily-os-hero-copy'>
          <div className='lily-os-eyebrow'>
            <span aria-hidden='true' /> PERSONAL AI OPERATING SYSTEM
          </div>
          <h1 id='lily-os-title'>{CONFIG.LILY_OS_TITLE}</h1>
          <p className='lily-os-hero-statement'>
            把想法组织成系统，
            <br />
            把系统推进成作品。
          </p>
          <p className='lily-os-hero-description'>{CONFIG.LILY_OS_SUBTITLE}</p>
          <div className='lily-os-hero-actions'>
            <a className='lily-os-primary-action' href='#active-projects'>
              查看进行中的项目 <span aria-hidden='true'>→</span>
            </a>
            <a className='lily-os-secondary-action' href='#latest-work'>
              浏览作品
            </a>
          </div>
        </div>

        <div className='lily-os-command-panel' aria-label='当前项目概览'>
          <div className='lily-os-panel-chrome'>
            <div className='lily-os-window-dots' aria-hidden='true'>
              <i />
              <i />
              <i />
            </div>
            <span>Project pulse</span>
            <span className='lily-os-live-badge'>LIVE</span>
          </div>
          <div className='lily-os-panel-header'>
            <div>
              <small>Active workspace</small>
              <strong>Now in motion</strong>
            </div>
            <span>{activeProjects.length} projects</span>
          </div>
          <div className='lily-os-panel-list'>
            {visibleProjects.map((project, index) => (
              <div className='lily-os-panel-row' key={project.project}>
                <span className='lily-os-panel-index'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <strong>{project.project}</strong>
                  <small>{project.nextAction}</small>
                </div>
                <span className='lily-os-panel-progress'>
                  {project.progress}%
                </span>
              </div>
            ))}
          </div>
          <div className='lily-os-panel-footer'>
            <span>
              <i aria-hidden='true' /> Synced from Notion
            </span>
            <span>Make ideas visible.</span>
          </div>
        </div>
      </section>

      <div className='lily-os-module-heading'>
        <span>01 / SYSTEM MAP</span>
        <p>六个入口，连接项目、作品与长期知识资产。</p>
      </div>
      <nav className='lily-os-navigation' aria-label='Lily‘s OS 模块导航'>
        {CONFIG.LILY_OS_NAVIGATION.map(item => (
          <NavigationCard key={item.title} item={item} />
        ))}
      </nav>

      <section id='active-projects' className='lily-os-projects'>
        <div className='lily-os-section-heading'>
          <div>
            <span>02 / NOW IN MOTION</span>
            <h2>Active Projects</h2>
          </div>
          <p>当前优先级最高、正在推进的 P1 项目</p>
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
