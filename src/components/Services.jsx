import { services } from '../constants/';

import { ServiceCard } from './index';

const Services = () => {
  return (
    <section className="flex flex-container flex-wrap justify-center gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
