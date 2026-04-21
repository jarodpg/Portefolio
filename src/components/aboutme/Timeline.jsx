import { motion } from 'framer-motion';


const TimelineItem = ({ title, subtitle, description }) => {
  return (
    <motion.div

      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="timeline-item"
    >


      <div className="timeline-dot"></div>

      <div className="timeline-card">

        <h3>{title}</h3>

        <p className="timeline-subtitle">{subtitle}</p>

        <p className="timeline-description">{description}</p>

      </div>

    </motion.div>
  );
};

export default function Timeline() {
  const dummyItems = [
    
    {
      title: "Collège Jean Paul II, Compiègne",
      subtitle: "2018 - 2022",
      description: "A private middle school where I spent four years building my academic foundations and developing a rigorous work ethic."
    },


    {
      title: "Lycée Pierre d'Ailly, Compiègne",
      subtitle: "2022 - 2025",
      description: "A public high school where I spent three years, focused my studies on sciences, and decided to pursue a career in technology."
    },

    
    {
      title: "Epitech / Bachelor",
      subtitle: "2025 - Now",
      description: "A leading higher education institution specializing in computer science, focused on project-based learning."
    }
  ];

  return (
    <div className="timeline-container">
        <div className="timeline-line">
            {dummyItems.map((item, index) => (
              <TimelineItem 
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            ))}
            
        </div>
    </div>
  );
}