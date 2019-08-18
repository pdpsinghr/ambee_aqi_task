<template>
  <div class="hello">
    <h1>get aqi</h1>
    <div class="datainput">
        <label>Select a Pollutant</label>
        <select v-model="selectedOption">
          <option value="" disabled selected>Select your option</option>
          <option v-for="(value,i) in options" :key="i">{{ value }}</option>
        </select>
        <div style="margin-left: 20px">
            <label>units</label>
            <input type="text" value="ug/m3" disabled/>
        </div>
    </div>
    <div class="datainput">
        <label class="">Your name</label>
        <input type="text" v-model="cname" />
        <label class="">your emailId</label>
        <input type="text" v-model="emailId" />
    </div>
    <div class="displayb">
        <label>Enter the Concentration:</label>
        <input type="text" v-model="concentaration"/>
        <button @click="getTheAqi()">calculate</button>
        <button @click="resetEveryField()">reset</button>
    </div>
    <div class="allresulats">
        <div>
            <label>AQI</label>
            <input type="text" v-model="aqi" style="width: 50px"/>
            <label>AQI Category</label>
            <input type="text" v-model="rangevalue" :style="{background: color[rangevalue]}"/>
        </div>
        <div class="displayresult">
            <label class="textarealabel">Sensitive Groups</label>
            <textarea class="textareafield" v-model="generalMessage"></textarea>
            <label class="textarealabel">Health Effects Statements</label>
            <textarea class="textareafield" v-model="healthEffectsStatements"></textarea>
            <label class="textarealabel">Cautionary Statements</label>
            <textarea class="textareafield" v-model="guidanceStatement"></textarea>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'calculateaqi',
  data () {
    return {
      options: ['PM10', 'PM2.5', 'SO2', 'NO2', 'O3', 'CO'],
      selectedOption: '',
      concentaration: '',
      aqi: '',
      rangevalue: '',
      generalMessage: '',
      healthEffectsStatements: '',
      guidanceStatement: '',
      emailId: '',
      cname: '',
      color: {
        '': '',
        'Good': 'rgb(0, 224, 0)',
        'Moderate': 'rgb(255, 255, 0)',
        'Unhealthy for Sensitive Groups': 'rgb(255, 118, 0)',
        'Unhealthy': 'rgb(255, 0, 0)',
        'Very Unhealthy': 'rgb(153, 0, 73)',
        'Hazardous': 'rgb(126, 0, 35)'
      }
    }
  },
  methods: {
    resetEveryField: function () {
      this.selectedOption = ''
      this.concentaration = ''
      this.aqi = ''
      this.rangevalue = ''
      this.guidanceStatement = ''
      this.healthEffectsStatements = ''
      this.generalMessage = ''
      this.emailId = ''
      this.cname = ''
    },
    getTheAqi: function () {
      var body = {
        pname: this.selectedOption,
        pvalue: this.concentaration,
        cname: this.cname,
        cemailid: this.emailId
      }
      axios.post('http://localhost:5000/api/threads/createThreads', body).then(r => {
        this.aqi = r.data.aqi
        this.rangevalue = r.data.category
        this.guidanceStatement = r.data.guidanceStatement
        this.generalMessage = r.data.generalMessage
        this.healthEffectsStatements = r.data.healthEffectsStatements
      })
        .catch(err => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allresulats {
    border: 2px solid green;
    padding-top: 20px;
}
.textareafield {
    width: 400px !important;
    margin-left: 441px;
    height: 60px;
}
.textarealabel {
    font-size: 20px;
    margin: 5px;
}
.displayresult {
    margin: 20px;
    display: grid;
}
.displayb {
  margin: 30px
}
.datainput {
  display: inline-flex
}
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
