import './main.css'
function Main() {
    const Skladniki = [
        {Name:"Ser",Value:"0.3"},
        {Name:"Ananas",Value:"0.5"},
        {Name:"Pieczarki",Value:"0.2"},
        {Name:"Szynka",Value:"0.4"},
        {Name:"Kiełbasa",Value:"0.5"},
        {Name:"Oliwki",Value:"0.1"},
        {Name:"Cebula",Value:"0.3"},
        {Name:"Papryka",Value:"0.4"},
        {Name:"Pomidor",Value:"0.2"},
        {Name:"Tuńczyk",Value:"0.5"},
        {Name:"Oliwki zielone",Value:"0.1"},
        {Name:"Anchois",Value:"0.4"},
        {Name:"Krewetki",Value:"0.5"},
        {Name:"Boczek",Value:"0.4"},
        {Name:"Feta",Value:"0.3"},
        {Name:"Gorgonzola",Value:"0.4"},
        {Name:"Mozzarella",Value:"0.2"},
        {Name:"Parmezan",Value:"0.3"},
        {Name:"Kapary",Value:"0.1"},
        {Name:"Bekon",Value:"1.2"},
        {Name:"Biały ser",Value:"1.3"},
        {Name:"Czarna fasola",Value:"1.1"},
        {Name:"Czosnek",Value:"1.2"},
        {Name:"Feta z oliwkami",Value:"1.4"},
        {Name:"Groszek",Value:"1.3"},
        {Name:"Kapusta",Value:"1.1"},
        {Name:"Kiełbasa krakowska",Value:"1.2"},
        {Name:"Kurczak",Value:"1.4"},
        {Name:"Pieczarki marynowane",Value:"1.3"},
        {Name:"Pomidory koktajlowe",Value:"1.1"},
        {Name:"Szpinak",Value:"1.1"},




    ];
    
        
    
    const Wszystkieskladniki = Skladniki.map((skladnik)=>
        <>
       <label>
       <span className='skladnik'> {skladnik.Name} - {skladnik.Value}zł</span>
       <input  type="checkbox" key={skladnik.Name} value={skladnik.Value}></input>
       <br></br>

       </label>
       
        </>
        )
         let Cena = 0;
         let lastClicked = "";
         let bigClicked = false;
         let medClicked = false;
         let smallClicked = false;
         window.onclick = e =>
         {
            if(e.target.getAttribute('type')==="checkbox")
            {
                let skladnikCena = e.target.value;
                if(e.target.checked)
                {
                    Cena += parseFloat(skladnikCena);
                    document.getElementById('cena').innerHTML = "Musisz zapłacić: "+Number(Cena.toFixed(1))+"zł" ;
                    console.log(Number(Cena.toFixed(1)));
    
                }
                else
                {
                    Cena -= parseFloat(skladnikCena);
                    document.getElementById('cena').innerHTML = "Musisz zapłacić: "+Number(Cena.toFixed(1))+"zł" ;
                    console.log(Number(Cena.toFixed(1)));
                }
            }
            
            if(e.target.getAttribute('type')==="radio")
            {
                
                if(e.target.value === "big" && bigClicked == false)
                {
                    if(lastClicked ==="med")
                    {
                        Cena-= parseFloat(12.5);
                    }
                    if(lastClicked ==="small")
                    {
                        Cena-= parseFloat(10);
                    }
                    Cena += parseFloat(15)
                    document.getElementById('cena').innerHTML = "Musisz zapłacić: "+Number(Cena.toFixed(1))+"zł" ;
                    bigClicked = true;
                    medClicked = false;
                    smallClicked  = false;
                    lastClicked = "big";
                }
           

                if(e.target.value === "med" && medClicked == false)
                {
                    if(lastClicked ==="big")
                    {
                        Cena-= parseFloat(15);
                    }
                    if(lastClicked ==="small")
                    {
                        Cena-= parseFloat(10);
                    }
                    Cena += parseFloat(12.5)
                    document.getElementById('cena').innerHTML = "Musisz zapłacić: "+Number(Cena.toFixed(1))+"zł" ;
                    medClicked = true;
                    bigClicked = false;
                    smallClicked = false;
                    lastClicked = "med";
                }
              

                if(e.target.value === "small" && smallClicked == false)
                {
                    if(lastClicked ==="big")
                    {
                        Cena-= parseFloat(15);
                    }
                    if(lastClicked === "med")
                    {
                        Cena-= parseFloat(12.5);
                    }
                    Cena += parseFloat(10)
                    document.getElementById('cena').innerHTML = "Musisz zapłacić: "+Number(Cena.toFixed(1))+"zł" ;
                    smallClicked = true;
                    bigClicked = false;
                    medClicked = false;
                    lastClicked = "small";
                }
                
 
 
            }
            else if(e.target.getAttribute('type')==="button")
            {
                if(smallClicked  || bigClicked || medClicked )
                {
                    let h = Math.floor(Math.random() * 2);
                    let min = Math.floor(Math.random() * (60 - 10) + 10);
                        if(h == 0)
                        {
                            alert("Zamówiono pizzę za "+ Number(Cena.toFixed(1))+"zł\nPizza będzie za około "+min+" minut");
    
                        }
                        else
                        {
                            alert("Zamówiono pizzę za "+ Number(Cena.toFixed(1))+"zł\nPizza będzie za około 0"+h+":"+min+"h");
    
                        }
                }
                else
                alert("Wybierz wielkosc pizzyu");
               
            }

           
         }


    return (
        <>
        
        <h1 id="tit">Skomponuj swoją pizzę</h1>
<div className='wielkosc'>
        <input id="rad" type="radio" value="big" name="pizza" /> <span className='txt'>Duża - 15zł</span>
        <input id="rad"type="radio" value="med" name="pizza" /> <span className='txt'>Średnia - 12.5zł</span>
        <input id="rad"  type="radio" value="small" name="pizza" /> <span className='txt'>Mała - 10zł</span>
</div>
<br></br>
            <div className='left'>
               {Wszystkieskladniki}
              

            </div>
            <div className='right'>
                <h1>Suma twojej spersonalizowanej  pizzy</h1>
                <br></br>
                <span id="cena">Musisz zapłacic: </span>
                <br></br>
                <input className='but' type="button" value="Zamów Pizzę!"></input>
              
                
            </div>
        </>
  
    );
  }
  export  default Main;