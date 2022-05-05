export const styles : Record<string, React.CSSProperties> = {
    container:{
        position: "absolute",
        top:"45%",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
    },
    card:{
        display: "flex",
        flexDirection:"column"
    },
    weatherLoader: {
        position:"absolute",
        top:"48%",
        left:"48%"
    },
    weatherError: {
        position:"absolute",
        top:"48%",
        left:"45%"
    },
    weatherBox: {
        backgroundColor:"white",
        // position:"absolute",
        // top:"35%",
        flexDirection:"column",
        display:"flex",
        padding:10,
        margin:"15%",
        flexWrap:"wrap",
        borderRadius:10
    },
    weatherIcon: {
        margin:10,
        height:200,
        width: "90%",
        marginBottom:20
    },
    countryLoader: {
        position:"absolute",
        top:"48%",
        left:"48%"
    },
    countryError: {
        position:"absolute",
        top:"48%",
        left:"45%"
    },
    countryCard: {
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
        padding:20,
        margin:20
    },
    countryImg: {
        margin:20,
        height:150,
        width: "80%",
        marginBottom:20
    },
    weatherBtn: {
        marginTop:20,
        backgroundColor:"lightseagreen",
        color:"white"
    }
}