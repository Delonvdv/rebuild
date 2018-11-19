<template>
   <div class="container">
                <div class="row justify-content-center align-self-center ">
                    <div class="col-sm-10">
                        <div class="introbox vertical-center" >
                            <div class="row padding-8">
                                <div class="col-xs col-sm-3">
                                    <img src="../media/abcc_welcome.jpg" class="w-100" alt="Medavie Blue Cross">
                                </div>
                                <div class="col-xs col-sm-3">
                                        <img src="../media/blue-s-logo.png" class="w-100" alt="Blue Shield">
                                </div>
                                <div class="col-xs col-md-6">
                                        <div class="float-right"><a href="#" class="text-primary">Language</a></div>
                                </div>
                            </div>
                            <div >
                                <img src="../media/loginImage.jpg" class="img-responsive fit-image" alt="family">
                            </div>
                            <div class=" userEmailBanner">
                                <div class="text-center">We've changed how you login! Just use your <strong>email address</strong> as your username</div>
                            </div>
                            <div class="row padding-8">
                                <div class="col-xs-12 col-sm-3">
                                    Member Services
                                </div>
                                <div class="col-xs-12 col-sm-5">
                                    <form>
                                        <div class="form-group row">
                                          <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                                          <div class="col-sm-9">
                                            <input type="text" class="form-control" id="staticEmail" placeholder="email">
                                          </div>
                                        </div>
                                        <div class="form-group row">
                                          <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                                          <div class="col-sm-9">
                                            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Login</button>
                                      </form>
                                      <div>
                                          First time? <a href="#" class="text-primary" >Register now</a>
                                      </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    Having trouble?
                                    <ul>
                                        <li><a href="#" class="text-primary">Forgot Password</a></li>
                                        <li><a href="#" class="text-primary">Reset login information</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    display:flex;
    align-items:center;
}
.introbox {
    position: relative;
    top: 70%;
    transform: translateY(-50%);
    border: 1px grey solid;
    border-radius:10px;
}
.fit-image{
    width: 100%;
    object-fit: fill;
    /* height: 300px; only if you want fixed height */
    /* height: 191px; */
/* width: 759px; */
}
.userEmailBanner {
    background-color: #63edc9;
    font-size: 18px;
    color: black;
    padding: 10px;
    font-family: "Trebuchet MS", arial, tahoma, sans-serif;
}
.padding-8{
    padding:8px;
}
</style>
