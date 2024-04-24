import React from "react";
import { Outlet } from "react-router-dom";

function PlanDetailler() {
  return (
    <section
      className="flex flex-col relative
      px-10 pb-32 pt-8 "
    >
      <div>
        <h1
          className="text-[30px] font-bold font-nunito 
          uppercase tracking-[1.5px] text-green-500"
        >
          Plan détaillé
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default PlanDetailler;
