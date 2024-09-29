
import Layout from "../layout";

const our_team = [
  {
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Team member",
    name: "Ankit srivastav",
    job: "Real Estate Specialist",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Team member",
    name: "Atul Dev",
    job: "Property manager",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Team member",
    name: "Sneha Singh",
    job: "Client Support Specialist",
  },
];

function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <img
              src="https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=800"
              alt="Luxury Villa"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />

            {/* Text Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-gray-600">
                We specialize in providing premium home and villa rentals.
                Whether you are looking for a short-term stay or a long-term
                rental, we have properties that suit all lifestyles. Our team is
                committed to helping you find the perfect place to call home,
                offering a seamless rental experience.
              </p>
              <p className="text-gray-600">
                With a wide range of options, from cozy apartments to luxurious
                villas, we ensure that each property meets our quality
                standards. Our mission is to deliver comfort, convenience, and
                affordability to renters while offering full transparency and
                support throughout the process.
              </p>
              <p className="text-gray-600">
                We are proud to be a trusted partner in the real estate
                industry, providing homes that match your lifestyle and needs.
                Let us help you find your dream home today!
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {our_team.map((team, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden p-6 text-center "
                >
                  <img
                    src={team.image}
                    alt={team.alt}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{team.name}</h3>
                  <p className="text-gray-500">{team.job}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
