import { useState } from 'react'

const Divider = () => {
  return (
    <div className='border border-gray-200 dark:border-gray-600 w-full my-8' />
  )
}

const Year = ({ children }) => {
  return (
    <h3 className='text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>
      {children}
    </h3>
  )
}

const Step = (props) => {
  return (
    <li className='mb-4 ml-2'>
      <div className='flex items-center mb-2 text-green-700 dark:text-green-300'>
        <span className='sr-only'>Check</span>
        <svg className='h-4 w-4 mr-2' viewBox='0 0 24 24'>
          <g
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
            <path d='M22 4L12 14.01l-3-3' />
          </g>
        </svg>
        <p className='font-medium text-gray-900 dark:text-gray-100'>
          {props.title}
        </p>
      </div>
      <p className='text-gray-700 dark:text-gray-400 ml-6'>{props.children}</p>
    </li>
  )
}

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2020</Year>
    <ul>
      <Step title='Completed my Second Year of Uni'>Two down; One to go.</Step>
      <Step title='Handed Over my First Professional Project 🏁'>
        I&apos;m excited to work with companies like Tyrrell Products Ltd. in
        the future. They were very accomodating for our group and our questions.
      </Step>
      <Step title='Started Kickboxing Training 🥊'>
        I&apos;ve always enjoyed watching the UFC and ONE championship, so why
        not learn a combat sport myself?
      </Step>
    </ul>
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title='Started my First Professional Project'>
        It&apos;s a weird feeling being a contractor for a real company. my only
        experience so far is creating projects for fake companies.
      </Step>
      <Step title='Completed my First Year of Uni'>
        First year seemed to have flown by. I hope the rest of my time here
        isn&apos;t bad.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title='Started at Brookdale Golf Club 🏌🏻‍♂️'>
        I should&apos;ve prepared better for the costs of being a uni student.
        Guess working under my dad won&apos;t be too bad.
      </Step>
      <Step title='Started at Manchester Metropolitan University 📚'>
        I&apos;m a Manchester lad born and raised, I couldn&apos;t see myself
        anywhere else. Time to make the family proud.
      </Step>
      <Step title="Left McDonald's 🍟">
        After a year and a half, I think I&apos;ve learnt everything I can from
        here. Time to move onto better things.
      </Step>
      <Step title='Graduated from Oldham Sixth Form College'>
        Two years later and I&apos;m more eager than ever to start working in
        this field, but there&apos;s one more obstacle I want to tackle;
        University.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title='Started at Oldham Sixth Form College 🤓'>
        The next step in my career. Time to get more focused with my education.
      </Step>
      <Step title="Started at McDonald's 🍟">
        Being able to choose when I work is great. Earning good money for the
        amount of work and learning to work well with others.
      </Step>
      <Step title='Graduated from Failsworth High School'>
        Though my GCSE&apos;s I didn&apos;t do any studying but came out strong
        with 10 C&apos;s and above. That was more than good enough with me since
        I had spent most nights playing League of Legends with my friends.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title='Started Failsworth High School'>
        I wasn&apos;t super popular going into high school, but made a few
        friends quickly and started playing more video games on my computer
        instead of Xbox.
      </Step>
    </ul>
    <Divider />
    <Year>2009</Year>
    <ul>
      <Step title='Became a part of FaZe Clan'>
        Not sure if I&apos;m allowed to admit this, but my dad got me the new
        Call of Duty Modern Warfare 2 for our family PC. I spent a lot of hours
        at that computer. Sorry for snitching dad!
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title='Became a Professional Zombie Killer 🧟‍♂️'>
        I would use my brothers Xbox whilst he was out with friends to play Call
        of Duty World at War. The zombies mode was my favourite, but it did also
        scare me quite a lot.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title='Born 👶🏼🍼' />
    </ul>
  </>
)

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>
        Timeline
      </h3>
      <Year>2023</Year>
      <ul>
        <Step title='Created the Entertainment Hub 📱'>
          Created the newest addition to the FootAsylum App where we host new
          &amp; exclusive content for our app users.
        </Step>
        <Step title='Landed a web dev role 💻'>
          After an awful time job seeking through the Christmas / New Years
          period, I&apos;m glad to say I have landed myself a job once again.
        </Step>
      </ul>
      <Divider />
      <Year>2022</Year>
      <ul>
        <Step title='Travelled back home 🇬🇧'>
          After 7 months away in some of the most beautiful countries I&apos;ve
          ever seen, I&apos;m ready to come back home and get back to work.
        </Step>
        <Step title='Trained Muay Thai 🥊'>
          The art of the 8 limbs is no joke, I had my fair share of injuries,
          but with access to the best teachers I still got effective training
          routines.
        </Step>
        <Step title='Left PayStream to travel 🛫'>
          Whilst everyone at PayStream made me feel like one of the family, I
          learnt that sitting at my desk everyday can get quite mundane.
          I&apos;ve never travelled for more than two weeks before, so this will
          definitely be a culture shock.
        </Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title='Joined PayStream'>
          I&apos;m extremely excited about this new role and learning as much as
          possible.
        </Step>
        <Step title='Left Brookdale Golf Club ⛳️'>
          Whilst I learnt a lot working here, it was always going to be
          temporary. It&apos;s time to move onto a job based around my passion,
          utilising my newly acquired degree.
        </Step>
        <Step title="Graduated with my Bachelor's Degree 🎓">
          After three years of studying, I can finally say I&apos;ve completed
          it.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type='button'
          className='flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 betterhover:hover:bg-gray-200 dark:betterhover:hover:bg-gray-800'
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className='h-4 w-4 ml-1'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>
      )}
    </>
  )
}
