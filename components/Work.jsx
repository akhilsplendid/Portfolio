'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: 'https://via.placeholder.com/150',
    category: 'React JS',
    name: 'Exercise Tracker',
    description:
      'Exercise Tracker is a web application built using React JS that allows users to track their workouts and monitor their progress over time. Users can log their exercises, including details such as exercise type, duration, and intensity. The application provides visualizations and statistics to help users analyze their fitness data and stay motivated on their fitness journey.',
    link: '/',
    github: '/',
  },
  {
    image: 'https://via.placeholder.com/150',
    category: 'ML',
    name: 'Optimization of Communication in Supply Chain using NLP',
    description:
      'This project focuses on optimizing communication within the supply chain using Natural Language Processing (NLP) techniques. By analyzing textual data such as emails, messages, and documents exchanged between various stakeholders in the supply chain, the goal is to improve communication efficiency, identify bottlenecks, and streamline processes.',
    link: '/',
    github: '/',
  },
  {
    image: 'https://via.placeholder.com/150',
    category: 'Data Science',
    name: 'Covid-19 Data Analysis',
    description:
      'Covid-19 Data Analysis project aims to analyze and visualize the spread and impact of the COVID-19 pandemic using data science techniques. It involves collecting, cleaning, and analyzing large datasets related to COVID-19 cases, deaths, testing, and vaccination rates. The insights gained from the analysis can help policymakers, healthcare professionals, and the general public make informed decisions.',
    link: '/',
    github: '/',
  },
  {
    image: 'https://via.placeholder.com/150',
    category: 'ML',
    name: 'Smoker Status Prediction using Bio Signals',
    description:
      'This project utilizes machine learning algorithms to predict the smoker status of individuals based on bio signals such as heart rate variability (HRV), respiratory rate, and skin conductance. By analyzing these physiological signals, the model can classify individuals as smokers or non-smokers with high accuracy, which can be valuable for healthcare interventions and smoking cessation programs.',
    link: '/',
    github: '/',
  },
  {
    image: 'https://via.placeholder.com/150',
    category: 'Data Science',
    name: 'Anomalies Detection in Supply Chain using Unsupervised Learning',
    description:
      'Anomalies Detection in Supply Chain project focuses on detecting abnormal patterns and outliers in supply chain data using unsupervised learning techniques such as clustering and anomaly detection algorithms. By identifying irregularities in processes, shipments, or inventory levels, the project aims to enhance supply chain visibility, reduce risks, and improve overall operational efficiency.',
    link: '/',
    github: '/',
  },
  {
    image: 'https://via.placeholder.com/150',
    category: 'Web & App',
    name: 'Flutter Chat Application',
    description:
      'Flutter Chat Application is a cross-platform mobile application developed using the Flutter framework for building native interfaces on iOS and Android. It provides real-time messaging functionality, allowing users to exchange text messages, images, and multimedia content. The application also supports features such as user authentication, push notifications, and message encryption for enhanced security.',
    link: '/',
    github: '/',
  },
  // {
  //   image: '',
  //   category: '',
  //   name: 'Serenity Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '',
  //   category: 'fullstack',
  //   name: 'Nova Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '',
  //   category: 'fullstack',
  //   name: 'Zenith Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
