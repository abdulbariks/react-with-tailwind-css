import image1 from "../src/images/images (2).jfif";
import image2 from "../src/images/download (4).jfif";
import image3 from "../src/images/download (5).jfif";

function App() {
  return (
    <div className="container mx-auto px-4 md:container md:mx-auto">
      <p className=" ml-10 m-5 p-5 border-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nesciunt
        minus, optio dolores quo, sint omnis repellendus incidunt voluptatem
        sequi necessitatibus laudantium id beatae, totam quos. Quam dolorum
        beatae dicta. Veniam a eaque sit laboriosam alias, repellat dolore vitae
        iure quasi molestias doloremque tempore, at veritatis atque. Iste, ab!
        Consequatur ad, magni sapiente minima perspiciatis alias nisi sequi
        rerum assumenda?
      </p>
      <div className="ml-10 bg-slate-600 text-center">
        <p className="text-sm font-medium text-gray-900">Abdul Barik</p>
        <p className="text-sm text-gray-500">abdulbarik1997m@gmail.com</p>
      </div>

      <div className="ml-10 columns-2 box-border  p-4 border-4 ">
        <img
          className="box-border h-32 w-32 p-4 border-4  hover:box-content "
          src="https://unsplash.com/photos/a-pink-flower-with-a-white-background-Y9JOITOAZQw"
          alt="pink flower"
        />
        <img
          className="box-border h-32 w-32 p-4 border-4"
          src="https://unsplash.com/photos/a-pink-flower-with-a-white-background-Y9JOITOAZQw"
          alt="pink flower"
        />
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <span className="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>
        <span className="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>
      </div>
      <div className="flex ...">
        <div className="flex-1 ...">01</div>
        <div className="contents">
          <div className="flex-1 ...">02</div>
          <div className="flex-1 ...">03</div>
        </div>
        <div className="flex-1 ...">04</div>
      </div>
      <div class="border-4 table w-full ...">
        <div class="table-header-group ...">
          <div class="table-row">
            <div class="table-cell text-left ...">Song</div>
            <div class="table-cell text-left ...">Artist</div>
            <div class="table-cell text-left ...">Year</div>
          </div>
        </div>
        <div class="table-row-group ">
          <div class="table-row">
            <div class="table-cell ...">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </div>
            <div class="table-cell ...">Malcolm Lockyer</div>
            <div class="table-cell ...">1961</div>
          </div>
          <div class="table-row">
            <div class="table-cell ...">Witchy Woman</div>
            <div class="table-cell ...">The Eagles</div>
            <div class="table-cell ...">1972</div>
          </div>
          <div class="table-row">
            <div class="table-cell ...">Shining Star</div>
            <div class="table-cell ...">Earth, Wind, and Fire</div>
            <div class="table-cell ...">1975</div>
          </div>
        </div>
      </div>
      <div>
        <table className="border-collapse border border-slate-400 ">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="columns-4">
        <img class="w-full aspect-video ..." src={image1} alt="image1" />
        <img class="w-full aspect-video ..." src={image2} alt="image1" />
        <img class="w-full aspect-video ..." src={image3} alt="image1" />
      </div>
      <div class="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
    </div>
  );
}

export default App;
