
import React from 'react';
import { Card } from '../components/card.tsx'
import heroImage from "../assets/images/branding.png";
import whyUsImg from "../assets/images/whyus.jpg"
import serviceImageOne from "../assets/images/img_02.jpg"
import {Heading} from "../components/heading"
import { HiOutlineChevronRight } from "react-icons/hi";



export const Home = () => {

	return (
        <>
        <main>
        <section>

        <div className="hero-section-container  px-6  lg:px-16 md:gap-[3rem] flex flex-col lg:flex-row lg:justify-around">
        {/*hero section*/}
        <div className="relative isolatept-14 ">
        <div
        className="hidden inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl  sm:-top-80"
        aria-hidden="true"
        >
        <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      />
      </div>
      <div className="md:w-[34rem]">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">

      </div>
      <div className="text-left">
      <h1 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">
      We Bring Your <span className="text-blue-900">Creative</span> <span className="text-yellow-400">Ideas</span> To Reality
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
      fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-10 flex items-center justify-start gap-x-6">
      <button className="btn bg-blue-600 text-white">Get Quote</button>

      <button className="btn bg-white border-2 border-blue-600">Learn More</button>
{/*
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Learn more <span aria-hidden="true">→</span>
      </a>*/}
      </div>
      </div>
      </div>
      <div
      className="hidden  inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
      >
      <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style={{
          clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      />
      </div>
      </div>

      <div className="carousle pt-8 md:pt-0">
      <img src={heroImage} alt="hero section" />
      </div>

      </div>
      </section>
      <section className="hidden heroSection px-6">
      <div className="colOne">
      <div className="text-blue-600 font-bold text-[2em] leading-tight">We Bring Your <span className="text-blue-900">Creative</span> <span className="text-yellow-400">Ideas</span> To Reality</div>
      <p className="text-gray-600 font-Montserrat">We offer unique design solutions that will make your project sucessfull</p>
      <div>
      <button className="btn cursor-pointer text-white bg-blue-600">Get Started</button>
      <button className="btn">Learn More</button>
      </div>
      </div>
      <div className="herosectionSlide">
      <img src="{heroImage}" alt="hero img"/>
      </div>
      </section>

      <section className="serviceSection mt-20">
      
      <div style={{ height: 100, overflow: "hidden" }}>
      <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{ height: "100%", width: "100%" }}
      >
      <path
      d="M0.00,49.98 C195.53,113.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
      style={{ stroke: "none", fill: "#eff6ff" }}
      />
      </svg>

      </div>

      <div className="bg-blue-50 px-6">

      {/*<h3 className="text-blue-600 font-bold text-2xl mb-4">What We Offer</h3>
      <h5>Lorem ipsum dolor sit amet aecati incidunt aecati incidunt amet quasi dolorum</h5>*/}
      <Heading mainHeading="What We Offer" subHeading="Lorem ipsum dolor sit amet aecati incidunt aecati incidunt amet quasi dolorum" />
      <div>
      <div className="cardsContainer flex flex-col gap-8 mt-8">
      
      <Card title="Packaging Design" imgSrc={serviceImageOne} />
      <Card title="Packaging Design" imgSrc={serviceImageOne} />
      <Card title="Packaging Design" imgSrc={serviceImageOne} />
      <Card title="Packaging Design" imgSrc={serviceImageOne} />
      
      </div>
      </div>
      <button className="btn bg-transparent text-blue-600 mt-8 cursor-pointer">
      See all Service
      < HiOutlineChevronRight/>
      </button>

      </div>
      <div style={{ height: 100, overflow: "hidden" }}>
      <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{ height: "100%", width: "100%" }}
      >
      <path
      d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
      style={{ stroke: "none", fill: "#eff6ff" }}
      />
      </svg>
      </div>

      </section>

      <section className="whyUs">
      
      <div className="px-6">

      
      <Heading mainHeading="Why Us Section" subHeading="Lorem ipsum cidunt amet quasi cidunt amet cidunt ametdolorum" />
      <figure>
      <img src={whyUsImg} className="rounded-lg" alt="why us image"/>
      </figure>

      <div className="whyFeatures">
      <div className="container">
      <div className="card">
      <img src="" alt="" />
      <div>
      <h2 className="card-title">Innovation</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nam, aspernatur aut reprehenderit quae accusantium vel libero, non voluptate doloribus, dolorum temporibus iusto ipsa obcaecati est quasi delectus. Temporibus, quibusdam.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>

      <section className="reviews">
      <h3>What Our Client Says</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolores facere non perferendis officia ad consequatur voluptatibus repellendus harum asperiores unde cupiditate, pariatur aspernatur quae obcaecati doloremque praesentium neque quisquam.</p>

      <div className="carousle">

      </div>
      </section>

      <section className="cta">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea libero optio architecto cumque? Voluptatibus obcaecati voluptas officiis? Est dolor illo nihil dolorem inventore! Aperiam enim velit eos numquam, esse eligendi?</p>
      <button className="btn">Get Quote</button>
      </section>
      </main>
      </>
      )

}