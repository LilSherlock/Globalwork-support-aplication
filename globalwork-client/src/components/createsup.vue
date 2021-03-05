<template>
    <div class="Support">
        <div id="left-suport">
            <div id="left-top">
                <input id="box-tittle" type="text" placeholder="Titulo del soporte" name="suptittle">
            </div>
            <div id="left-bottom">
                <textarea id="box-description" name="descriptio" rows="10" cols="30" placeholder="description of support"></textarea>
            </div>
        </div>
        <div id="rigth-suport">
            <div id="right-top">
                <select id="list-priority" name="priority">
                    <option id="opt">Select priority</option>
                    <option id="opt">Priority lvl 1</option>
                    <option id="opt">Priority lvl 2</option>
                    <option id="opt">Priority lvl 3</option>
                    <option>Priority lvl 4</option>
                    <option>Priority lvl 5</option>
                    <option>Priority lvl 6</option>
                    <option>Priority lvl 7</option>
                    <option>Priority lvl 8</option>
                    <option>Priority lvl 9</option>
                    <option>Priority lvl 10</option>
                </select>
            </div>
            <div id="right-bottom">
                <button id="button" type="submit">send a suport</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'support',
    props: {
        msg: String
    }
}
</script>

<style>

.Support{
  width: 90%;
  height: 400px;
  margin: auto;
}

#left-suport {
    float: left;
    width: 80%;
    height: 100%;
}

#rigth-suport {
    float: right;
    width: 20%;
    height: 100%;
}

#left-top{
  width: 80%;
  height: 20%;
  margin-left: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
  outline: none;
  box-shadow:none !important;
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
}

#box-tittle{
  width: 100%;
  padding: 15px;
  background-color: #eff6e0;
  border: 1px solid black;
  border-radius: 25px;
  outline: none;
  box-shadow:none !important;
  border:2px solid #353535 !important;
  font-family: 'Rubik', sans-serif;
}

#left-bottom{
  width: 80%;
  height: 72%;
  margin-left: 10%;
  outline: none;
  box-shadow:none !important;
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
}

#box-description{
  width: 100%;
  height: 100%;
  background-color: #eff6e0;
  border: 1px solid black;
  border-radius: 15px;
  outline: none;
  box-shadow:none !important;
  border:2px solid #353535 !important;
  font-family: 'Rubik', sans-serif;
}

#right-top{
  width: 80%;
  height: 72%;
  margin-left: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
  outline: none;
  box-shadow:none !important;
  font-family: 'Rubik', sans-serif;
}
#list-priority{
  width: 100%;
  height: 18%;
  margin-top: 50%;
  margin-left: 1px;
  padding: 15px;
  background-color: #eff6e0;
  border: 1px solid black;
  border-radius: 25px;
  outline: none;
  box-shadow:none !important;
  border:2px solid #353535 !important;
  font-family: 'Rubik', sans-serif;
}
#right-bottom{
  width: 80%;
  height: 20%;;
  margin-left: 10%;
  outline: none;
  box-shadow:none !important;
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
}
#button {
  width: 80%;
  padding: 15px;
  margin-left: 1px;
  background-color: #fef9ef;
  border:2px solid #353535 !important;
  border-radius: 25px;
  outline: none;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0 3px #999;
  text-align: center;
}
button:active {
  background-color: #eff6e0;
  box-shadow: 0 3px #666;
  transform: translateY(2px);
}
</style>