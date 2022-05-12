AFRAME.registerComponent("base",{
    schema:{
        radius:{type: "number", default: 200},
        height:{type: "number", default: 1}
    },


    init: function(){
        this.el.setAttribute("geometry",{
            primitve: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
    
    this.el.setAttribute("material", { color: "#1769aa"});
}
})