export default function LogInSignIn() {
  return (
    <div>
      <form action="" className="text-black">
        <div className="flex rounded">
          <div className="mr-4">
            <input type="text" placeholder="Login..." className="p-2 rounded" />
          </div>
          <div>
            <input type="text" placeholder="Login..." className="p-2 rounded" />
          </div>
          <div className="flex align-cente justify-center">
            <button className="text-white border-2 border-white-500 p-1 rounded-xl ">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
