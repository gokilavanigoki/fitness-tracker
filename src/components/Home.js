// import HomeImg from "../image/Home.jpg"
// export default function Home (){
//     return <section className="flex flex-col bg-secondary text-white px-5 py-36 justify-center">
//     <div className="flex flex-col">
//         <h1 className="text-6xl text-center font-hero-font">Welcome to Fitness Tracker</h1>
//     </div>
//     <img className="relative h-screen bg-cover bg-center"src={HomeImg} alt=""/>
//     </section>
// }



import HomeImg from "../image/home.jpg"

export default function Home () {

return<section className="relative h-[500px] bg-cover bg-center py-36 "
style={{
  backgroundImage: `url(${HomeImg})`,
}}>
  {/* {text content} */}
  <div className="relative text-center text-white z-10 font-hero-font">
  <h1 className="font-bold text-4xl mb-5">Welcome to Fitness Tracker</h1>
  <p className="font-medium text-color mb-6"> Track your progress, stay motivated, and achieve your fitness goals.</p>
  <button className="bg-red-950 px-6 py-2 rounded-lg shadow-md hover:bg-red-900">
    Get Start</button>
  </div>
</section>
}


