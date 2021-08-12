// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful. =)

export default () => (
  <div className="w-full h-screen bg-tg-blue-10">
    <div className="w-1/2 px-4 mx-auto pt-48">
      <div className="w-full md:w-112">
        <h1 className="text-4xl mb-4">Something went wrong.</h1>
      </div>
    </div>
  </div>
)
