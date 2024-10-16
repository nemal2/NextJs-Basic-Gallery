export default async function Hello() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //throw new Error("Something went wrong");
    return <h1>Hello, Next.js!</h1>;
}