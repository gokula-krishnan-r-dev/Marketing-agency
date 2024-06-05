import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};
const servicedata = [
  {
    title: "Facebook Ads",
    description:
      "Executing targeted advertising campaigns on the world's largest social media platform to effectively reach your desired audience.",

    image:
      "https://a.storyblok.com/f/264268/1300x800/12175a7357/how-to-run-multiple-ad-campaigns-on-facebook.png",
  },
  {
    title: "Instagram Ads",
    description:
      "Creating visually appealing and engaging advertisements on Instagram to reach your target audience and grow your brand.",
    image:
      "https://www.socialpilot.co/wp-content/uploads/2021/06/How-To-Run-Instagram-Ads-A-Beginners-Guide-To-Becoming-Pro.jpg",
  },
  {
    title: "Google Ads",
    description:
      "Running targeted advertising campaigns on Google to reach potential customers and drive traffic to your website.",
    image:
      "https://nestscale.com/wp-content/uploads/2023/12/Types-of-Google-Ads-3.png",
  },
  {
    title: "Tiktok Ads",
    description:
      "Creating engaging and entertaining advertisements on TikTok to reach a younger audience and increase brand awareness.",
    image:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_e642772ccd211193d80b0ad74aea1c55/tiktok-ads.png",
  },
  {
    title: "Content Creation",
    description:
      "Producing high-quality and engaging content for your social media platforms to attract and engage your target audience.",
    image:
      "https://cdn.dribbble.com/userupload/9444988/file/still-f44afc283ddc25b0ddae04b806d7bb1e.gif?resize=400x0",
  },
  {
    title: "Influencer Marketing",
    description:
      "Collaborating with influencers to promote your brand and products to their followers, increasing brand awareness and driving sales.",
    image:
      "https://www.influencer.in/wp-content/uploads/2021/08/blog-1-copy.jpg",
  },
  {
    title: "Graphic Designing",
    description:
      "Creating visually appealing graphics and designs for your social media platforms to attract and engage your target audience.",
    image:
      "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/09/gdi-internal-design-rules-for-advertiting.jpg?fit=1200%2C800&ssl=1",
  },
  {
    title: "Web Development",
    description:
      "Developing and designing responsive and user-friendly websites for your business to attract and engage customers online.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEjBilP-PBEbL7NAsVh5jU2PEYPgaGhh8-g&s",
  },
];
const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <div className="px-24">
        <div className="mx-auto flex h-[300px] w-full flex-col items-center justify-center gap-6 rounded-3xl bg-[url('https://skyboostagency.com/wp-content/uploads/2024/05/ombre-gray-layer-patterned-background-2022-12-15-23-50-15-utc.jpg')] px-6">
          <button className="rounded-full bg-gray-200 px-4 py-2 text-xs text-gray-800">
            OUR SERVICE
          </button>
          <h1 className="text-2xl font-bold text-black">
            Social Media Strategy
          </h1>
        </div>

        <div className="">
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-14 py-8 md:grid-cols-2 lg:grid-cols-3">
            {servicedata.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl border p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"
              >
                <img
                  src={service.image}
                  alt="service"
                  className="h-64 w-full rounded-3xl object-cover"
                />
                <h1 className="mt-4 text-lg font-bold">{service.title}</h1>
                <p className="mt-2 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
};

export default AboutPage;
