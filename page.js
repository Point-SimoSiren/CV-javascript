  // Contact napin toiminnot
        // Esimerkin vuoksi event listenerin määritys js koodissa
        var btn = document.getElementById("contact")
        btn.addEventListener("click", contact)

        function contact() {
            // Rootin tyhjennys
            document.getElementById("root").innerHTML = ""
            // Elementtien luominen contact tiedon näyttämiseksi
            const element = document.createElement("h3")
            const email =  document.createTextNode("koodari@koodari.com")
            element.appendChild(email)
            document.getElementById("root").appendChild(element)
        }

  
 //-----------HOME NAPPI---------------------------------------------       
        
        function home() {
                    let x = `
                    <h3>Welcome!</h3>

                    <p>This is my digital CV page</p>
                    <p>Enjoy!</p>
                    `
                    document.getElementById("root").innerHTML = x
                }

 //------------SKILLS NAPPI--------------------------------------------

        function skills() {
            let x = `
            <ul style="max-width: 10%">
                <li>C#</li>
                <li>WPF</li>
                <li>Unity</li>
                <li>HTML</li>
            </ul>
            `
            document.getElementById("root").innerHTML = x
        }
//--------------------------------------------------------

        // Kun sivu latautuu kutsutaan home funktiota että saa alkusivun näkyviin
        home()
