
// import { BeakerIcon } from '@heroicons/react/24/solid'
export default function Header(){
    return <header className="flex justify-between px-4 py-4 bg-primary font-hero-font text-white">
      <h1 className ="font-bold">Fitness Tracker</h1>
      <ul className="flex">
        <li><a href="/">Home</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
      </ul>
    </header>
}