import Image from "next/image";
import { H1 } from "./components/H1";

export default function Home() {
  return (
    <main className="p-6 text-center">
  
      {/* w HTMLowym img zdjecie bedzie zaladowane pomimo tego, ze w CSS jest ukryte  */}
      {/* hidden -> ukryj, md:block -> wysiwetlaj blokowo od breakpointu md */}
      {/* <img src="/todo.jpg" alt="App logo" width={480} height={320} className="hidden md:block mx-auto" /> */}

      {/* w nextowym Image zdjecie NIE bedzie zaladowane, bo w CSS jest ukryte  */}
      {/* Dopiero pokaze sie i pobierze od rozmiaru md */}
      {/* <Image src="/todo.jpg" alt="App logo" width={480} height={320} className="hidden md:block mx-auto" /> */}
      
      
      {/* Symyluje dluga tresc strony */}
      {/* <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div> */}

      {/* <img /> pobierze zdjecie pomimo tego, ze jest gdzies na samym dole strony i uzytkowink go nie widzi */}
      {/* <img src="/todo.jpg" alt="App logo" width={480} height={320} className="mx-auto" /> */}
      {/* <Image /> NIE pobierze zdjecia bo, jest ono gdzies na samym dole strony i uzytkowink go nie widzi */}
      {/* Bedzie pobrane dopiero, kiedy uytkownik sie do niego odpowiednio blisko zblizy */}
      {/* <Image src="/todo.jpg" alt="App logo" width={480} height={320} className="mx-auto" /> */}
      
      {/*  Przyklad z wypelnieniem rodzica */}
      {/* <div className="relative w-40 h-40">
        <Image src="/todo.jpg" alt="App logo" fill={true} />
      </div> */}

      <Image src="/todo.jpg" alt="App logo" width={480} height={320} className="mx-auto mb-6" />


      <H1>Do zrobienia</H1>
    </main>
  )
}
