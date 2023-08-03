import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {View, StyleSheet} from 'react-native'

const FilterOverlayButton = () => {
    return(
        <View style={styles.container}>
            <AntDesignIcon name='filter' size={28}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
    }
})

export default FilterOverlayButton;