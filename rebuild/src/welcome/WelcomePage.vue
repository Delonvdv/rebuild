<template>

<div class="none">
     <WelcomeNav/>
   <div class="container">

            <div class="row mt-2 mb-2">
                <div class="col-sm-4">Policy: 0000239000</div>
                <div class="col-sm-4">ID: 50205211100</div>
                <div class="col-sm-4">Name: Delon Van de Venter</div>
            </div>
            <div class="w-100"></div>
            <div class="alert alert-dark pb-4">
                    <h2>Your plan</h2>
                    <div class="w-100"></div>
                    <div class="row">
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-lg btn-block my-1">Submit a claim</button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-lg btn-block my-1">Check your coverage</button>
                    </div>
                </div>
            </div>
            <div class="w-100"></div>
            <div class="alert alert-dark pb-4">
                    <h2>Transaction History</h2>
                    <div class="w-100"></div>
                    <div class="row">
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-lg btn-block my-1">Review past claims</button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-lg btn-block my-1">Print an official statement</button>
                    </div>
                </div>
            </div>
            <div class="w-100"></div>
            <div class="alert alert-dark pb-4">
                    <h2>Your account</h2>
                    <div class="w-100"></div>
                    <div class="row">
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-lg btn-block my-1">Print or share your member card</button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-lg btn-block my-1">Direct deposit info</button>
                    </div>
                </div>
            </div>
            <div class="w-100">
                <div class="timeout">
                    <p>Note: You have entered a secure area. If your connection is inactive for more than 30 minutes, your connection will be terminated and you will be required to repeat your login to this site.
                            To view the Forms you will need the Acrobat Reader plug-in that is available at no cost from the Adobe site.</p>
                </div>
            </div>

        </div>

</div>
</template>

<script>
// import WelcomeNav from '../shared/WelcomeNav.vue';

export default {
    name : 'WelcomePage',
    // components:{
    // 'WelcomeNav': WelcomeNav
    // }
}
</script>

<style>

</style>
