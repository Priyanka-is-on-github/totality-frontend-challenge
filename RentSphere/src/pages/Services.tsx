import Layout from "../layout";
import { Button } from "../components/ui/button";

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive, fast, and secure websites using modern web technologies.",
    image: "src/assets/service_images/webdev.jpg",
  },
  {
    title: "Mobile Development",
    description:
      "Develop high-performance mobile apps with an excellent user experience.",
    image: "src/assets/service_images/mobiledev.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Design beautiful, intuitive, and user-centered interfaces.",
    image: "src/assets/service_images/ui.jpg",
  },
];

function Services() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 pt-[10%] px-6 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button className="w-full bg-sky-800">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
