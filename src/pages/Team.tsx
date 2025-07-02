
import Navigation from "../components/Navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      initials: "RB",
      name: "Richard Barber",
      role: "Chief Commercial Officer",
      description: "Ex Money Saving Expert and Everything Financial"
    },
    {
      initials: "MFJ",
      name: "Marcus Ferguson Jones",
      role: "CEO",
      description: "ex LOQBOX, totallymoney.com and Raylo"
    },
    {
      initials: "GB",
      name: "Gary Buxton",
      role: "Operations Director",
      description: "ex HD Decisions and Experian"
    },
    {
      initials: "MW",
      name: "Mark Wakeling",
      role: "CTO",
      description: "ex Capital One and Experian"
    },
    {
      initials: "MD",
      name: "Matt Denman",
      role: "Founder, backer, Director",
      description: "Cofounder of HD Decisions and Podium"
    },
    {
      initials: "MH",
      name: "Mark Hawkins",
      role: "Board Member",
      description: "Cofounder of HD Decisions & Factor-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-6xl mx-auto py-16 px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
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
