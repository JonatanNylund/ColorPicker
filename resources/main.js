class ColorPicker {
    constructor(root){
        this.root = root;
        this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null;
        this.savedColors = this.getSavedColors();
        this.colorjoe.show()
    }

    get savedColors(){
        return ["#ffffff, #ffffff, #ffffff, #ffffff, #ffffff"]
    }
}

const cp = new ColorPicker(document.querySelector(".container"));


//https://youtu.be/eGth988Sm8w?feature=shared&t=1523