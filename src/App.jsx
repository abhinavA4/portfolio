import './App.css'
import { Projects } from './components/Projects'
import { Socialbar } from './components/Socialbar'
import { Tools } from './components/Tools'

function App() {

  return (
    <div className='w-[800px] mx-auto p-4 border-2'>
      <div className='flex flex-col gap-6'>
        <div className='flex'>
          <div>
            <img src="imgg.jpeg" className='size-32' />
          </div>
          <div className='pl-4 flex flex-col gap-7'>
            <div>
              <h2 className='text-4xl font-bold'>Elon Musk</h2>
              <h3 className='text-lg'>Software Engineer</h3>
            </div>
            <div>
              <Socialbar/>
            </div>
          </div>
        </div>


        <div>
          <h1 className='text-lg font-bold pb-1'>About Me</h1>
          <p className='text-base'>Hey! I'm Rinkit Adhana, an undergraduate computer science student and full-stack developer who loves turning ideas into real, working products.
            I'm flexible working with any tech stack, though I prefer modern tools. I'm currently working with Next.js, Django, Express, and TypeScript.
            I love contributing to open-source projects and have actively participated in multiple hackathons, where I collaborate, build, and solve real-world problems.</p>
        </div>

        <div>
          <h1 className='text-lg font-bold pb-1'>Reach out to me</h1>
          <p className='text-base'>Most of the time, you'll find me hanging out on my Discord channel while coding. I'm also super active on X, so feel free to DM me there or reach out to me via email if you have any queries.
          </p>
          <Socialbar />
        </div>

        <div>
          <h1 className='text-lg font-bold pb-1'>Hire Me</h1>
          <p className='text-base'>I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!
          </p>
          <Socialbar />
        </div>

        <div>
          <h1 className='text-lg font-bold pb-1'>Skills & Tools</h1>
          <Tools />
        </div>

        <div>
          <h1 className='text-lg font-bold pb-1'>Projects</h1>
          <Projects/>
        </div>

        
      </div>
    </div>
  )
}

export default App
