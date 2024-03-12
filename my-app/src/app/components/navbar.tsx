import Link from "next/link";
import LogInSignIn from "../components/logInSignIn";
import ActiveUser from "../components/activeUser";

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between p-5">
        <div>
          <p className="text-center text-3xl text-gray-400 ">
            <Link href="/">Cars Service</Link>
          </p>
        </div>
        <div>
          <LogInSignIn></LogInSignIn>
        </div>
      </div>

      <div className="my-5 flex justify-center">
        <ul className="flex">
          <li className="mx-10">
            <Link href="/showCars">Show cars</Link>
          </li>
          <li className="mx-10">
            <Link href="/">Add cars</Link>
          </li>
          <li className="mx-10">
            <Link href="/">Edit cars</Link>
          </li>
          <li className="mx-10">
            <Link href="/">Delete cars</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
