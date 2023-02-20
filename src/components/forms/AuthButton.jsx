export default function AuthButton({ description })
{
    return (
        <button className="btn btn-primary d-block mx-auto border mt-4 w-25 rounded-pill">{description}</button>
    );
}