<template>
  <div class="hello">
    <h1>Air quality index</h1>
    <div style="display: inline-grid;">
      <p class="ptag">Computation of the AQI requires an air pollutant concentration over a specified averaging period,
       obtained from an air monitor or model. Taken together, concentration and time represent the dose of
        the air pollutant. Health effects corresponding to a given dose are established by epidemiological
         research.[5] Air pollutants vary in potency, and the function used to convert from air pollutant
          concentration to AQI varies by pollutant. Its air quality index values are typically grouped into
          ranges. Each range is assigned a descriptor, a color code, and a standardized public health advisory.</p>
          <button class="buttonstyle" @click="gotoaqipage()">calculate AQI</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    gotoaqipage: function () {
      console.log('hello')
      this.$router.push('/calculateaqi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttonstyle {
  height: 30px;
  width: 230px;
  background: gray;
}
.ptag {
  font-size: 20px;
  width: 600px;
  height: 300px;
  text-align: center;
  display: inline-block;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
