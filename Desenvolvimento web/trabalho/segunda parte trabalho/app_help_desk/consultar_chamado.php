<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <style>
      .card-consultar-chamado {
        padding: 30px 0 0 0;
        width: 100%;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>

    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <!-- logo --> 
        <a class="navbar-brand" href="home.php">
          <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
          App Help Desk
        </a>
         <!--navegação --> 
         <ul class="navbar-nav ml-auto">
           <li class="nav-item">
             <a href="" class="nav-link">Perfil</a>
           </li>
           <li class="nav-item">
             <a href="" class="nav-link">Sair</a>
           </li>
         </ul>
      </nav>

    <div class="container">    
      <div class="row">

        <div class="card-consultar-chamado">
          <div class="card">
            <div class="card-header">
              Consulta de chamado
            </div>
            
            <div class="card-body">
                <div class="card mb-3 bg-light">
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <p class="card-text"></p>
                  </div>
                </div>
              <div class="row mt-5">
                <div class="col-6">
                  <a href="home.php" class="btn btn-lg btn-warning btn-block" type="submit">Voltar</a>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </body>
</html>