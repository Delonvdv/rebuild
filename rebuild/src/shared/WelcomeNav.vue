<template>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <!-- <a class="navbar-brand" href="#">Medavie Logo here</a> -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleNav" aria-controls="toggleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="col-sm-1"></div>
                <div class="collapse navbar-collapse" id="toggleNav">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Coverage <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Statements <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">eClaims <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Forms <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Member <span class="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
</template>

<script>
export default {
    name: 'WelcomeNav'
}
</script>

<style>

</style>

