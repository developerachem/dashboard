import Input from "../../../components/form-element/input";
import Password from "../../../components/form-element/password";
import Logo from "../../../components/logo/logo";

function Login() {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div>
        <Logo className="m-auto w-[250px]" />
        <form className="max-w-[450px] bg-white p-10 rounded-lg shadow-lg mt-5">
          <h1 className="text-2xl font-medium border-b mb-5 pb-1">Login</h1>
          <Input label="Email" />
          <Password label="Password" />
          <button
            className="btn w-full rounded-md text-white"
            style={{ backgroundColor: "#1B5276" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
