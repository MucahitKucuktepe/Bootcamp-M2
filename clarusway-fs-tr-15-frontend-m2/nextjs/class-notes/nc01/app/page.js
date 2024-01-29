//? app folder içindeki page.js "/" route olan home sayfasıdır
//? nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use-client" direktifini kullanmamız gerekir

import React from "react";
const page = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">HOME</h1>
    </div>
  );
};

export default page;
