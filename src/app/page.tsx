import Categories from "@/components/Home/Categories/Categories";
import Hero from "@/components/Home/Hero/Hero";
import PopularCourses from "@/components/Home/PopularCourses/PopularCourses";
import RecommendedCourses from "@/components/Home/RecommendedCourses/RecommendedCourses";
import Services from "@/components/Home/Services/Services";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Categories />
      <PopularCourses />
      <RecommendedCourses />
      <Testimonials />
    </>
  );
}
