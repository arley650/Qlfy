
import Navigation from "../components/Navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      initials: "JD",
      name: "John Doe",
      role: "Chief Executive Officer",
      description: "Visionary leader with 15+ years of experience in financial technology and business strategy."
    },
    {
      initials: "SM",
      name: "Sarah Martinez",
      role: "Chief Technology Officer",
      description: "Expert software architect specializing in scalable systems and innovative solutions."
    },
    {
      initials: "MJ",
      name: "Michael Johnson",
      role: "Head of Operations",
      description: "Operations specialist focused on efficiency and process optimization across all departments."
    },
    {
      initials: "EW",
      name: "Emily Wilson",
      role: "Lead Data Scientist",
      description: "Data analytics expert with deep expertise in machine learning and predictive modeling."
    },
    {
      initials: "RT",
      name: "Robert Taylor",
      role: "Senior Developer",
      description: "Full-stack developer with passion for creating robust and user-friendly applications."
    },
    {
      initials: "LB",
      name: "Lisa Brown",
      role: "Product Manager",
      description: "Product strategy leader focused on delivering exceptional user experiences and business value."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-6xl mx-auto py-16 px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals who make Qlfy's success possible. Our diverse team 
            brings together expertise from various fields to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-6 bg-blue-600 text-white text-2xl font-bold">
                <AvatarFallback className="bg-blue-600 text-white text-2xl font-bold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <h4 className="text-blue-600 font-medium mb-4">{member.role}</h4>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
