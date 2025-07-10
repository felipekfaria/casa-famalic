import { Award, Trophy, Star } from "lucide-react";

export const AwardsSection = () => {
  const awards = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "EQUIPA Nº1",
      subtitle: "ZONA NORTE"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "TOP 3 NACIONAL",
      subtitle: "IMÓVEIS VENDIDOS"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "25º",
      subtitle: "A NÍVEL MUNDIAL"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Prémios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center">
              <div className="award-badge mx-auto w-32 h-32 flex flex-col items-center justify-center mb-4">
                {award.icon}
                <div className="mt-2">
                  <div className="font-bold text-lg leading-tight">
                    {award.title}
                  </div>
                  <div className="text-sm font-medium">
                    {award.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative laurel elements */}
        <div className="flex justify-center mt-12">
          <div className="text-accent text-4xl">🏆</div>
        </div>
      </div>
    </section>
  );
};