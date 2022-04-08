import './App.css';

function App() {
  return (
    <div className=" bg-yellow flex flex-col items-center m-12 pb-9 pt-5 rounded-xl ring-offet-3" >
      <h1>
        Hello world!
      </h1>
      <div class="text-center container mx-auto">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </div>
      <h2 className="font-bold m-9 text-2xl">List</h2>
      <ul className='list-disc text-center list-inside divide-y-2 bg-opacity-.5 w-16'>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
      <button class="border-2 pl-4 pr-4 mt-3 rounded-md hover:bg-green font-light  text-purple">Info</button>
    </div>
  );
}

export default App;
