# Lämmittelytehtävä 2

Tässä harjoituksessa harjoitellaan tehtävään vastaamista. Tehtävä kopioidaan ensin GitHubista omalle 
koneelle, jossa siihen tehdään tarvittavat muutokset. 
Muutosten toiminnallisuutta voi testata suorittamalla
tehtävän mukana tulevan testausskriptin. Lopuksi tehdyt
muutokset viedään ensin paikalliseen kopioon ja sieltä
siirretään GitHubissa olevaan versioon. GitHub tekee 
muutosten jälkeen automaattisen tarkistuksen ja merkitsee
tehtävän onnistuneeksi. 

Etene seuraavasti:

1. Kopioi tehtävän lähdekoodi GitHub-repositorysta 
   omalle koneelle. Tämän voit tehdä suorittamalla komentorivillä komennon:
    ```
    git clone (laita tähän repon GitHub-osoite)
    ```
   Voit vaihtoehtoisesti kopioida repon GitHub Desktop -ohjelmassa.

2. Etsi lähdekoodeista tehtava-kansion sisältä 
   **tehtava.js** -tiedosto ja avaa se editoriin. Tämä tiedosto sisältää noden päällä suoritettavaa Javascript-koodia.

3. Muokkaa js-tiedostoa ohjeiden mukaisesti eli muuta ohjelma tulostamaan ohjeiden mukainen teksti.

4. Voit tarkistaa tekemiesi muutosten toiminnallisuuden suorittamalla komennon:
    ```
    npm start
    ``` 

5. Asenna testiskriptin käyttämä jest-paketti 
   suorittamalla komentorivillä komento:
    ```
    npm install -g jest
    ```
   Huomaa, että tämän asennuksen tarvitsee tehdä vain kerran, 
   seuraavien tehtävien kohdalle sinun ei tarvitse asentaa sitä uudelleen.

6. Voit tarkistaa hyväksytäänkö tekemäsi muutokset 
   suorittamalla testausskriptit tehtäväkansiossa komennolla: 
    ```
    npm test
    ```

7. Jos olet tyytyväinen tekemiisi muutoksiin, niin vie 
   muutokset paikalliseen git-repoon tekemällä Visual Studio Codessa commit tai komentorivillä seuraavilla komennoilla:
    ```
    git add .
    git commit -m "Tehtävän ratkaisu"
    ```

8. Vie tekemäsi muutokset GitHubiin Visual Studio 
   Codessa push-toiminnolla tai seuraavalla komennolla komentorivillä:
    ```
    git push
    ```

