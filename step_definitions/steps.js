const { I } = inject();
// Add in your custom step files

Given('I navigate to the application', () => {
  I.amOnPage('https://www.fcs-monitoreo.com/home.html');
});

Given('Login with username and password', (table) => {
  const cells = table.rows[1].cells;
  I.fillField("emailLogin", cells[0].value);
  I.fillField("passwordLogin",cells[1].value);

});

Given('I click login button', () => {
 I.click("//button[contains(text(),'Ingresar')]")
  
});

Given('Login Succesfully', () => {
  I.waitForElement({xpath: "//p[contains(text(),'¡Hola Guillermo !')]"}, 30);
   
 });

 Given('Click registro diario de sintomas', () => {
  I.click({xpath:"/html/body/section[4]/div/div[3]/button"})
  I.click({xpath:"/html/body/main/section/div/div[2]/div[1]"})
 });

 Given('Llenar formualrio', (table) => {
  const cells = table.rows[1].cells;
  I.fillField("idOximetry", cells[1].value);
  for (var i = 0; i < 9; i++) {
    I.selectOption('selecTemp',cells[0].value);
 }

 
 });

 Given('Save formulario', (table) => {
  
 I.click({xpath:"/html/body/main/section/div/div[2]/div[4]/button"})
 I.waitForElement({xpath:"/html/body/main/section/div/div[3]/div[2]/div[2]/div[2]/div"}, 5);
 I.click({xpath:"/html/body/main/section/div/div[3]/div[3]/button"})
 
 });