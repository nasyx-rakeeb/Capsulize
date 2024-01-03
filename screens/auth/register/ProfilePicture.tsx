import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../others/colors";
import { TextInput, Button } from "react-native-paper";
import { useProfilePicture } from "../../../hooks";
import { List } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";

const ProfilePicture = ({ navigation }) => {
  const {
    profilePicture,
    setProfilePicture,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
    imageLoading,
    setImageLoading,
    pickImage
  } = useProfilePicture(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Profile Picture</Text>
      </View>
      <View style={styles.subHeadingContainer}>
        <Text style={styles.subHeading}>
          Enhance your profile by adding a profile picture, or you can continue
          without adding one.
        </Text>
      </View>
      <View style={styles.pictureContainer}>
        {!!profilePicture && profilePicture?.length > 0 ? (
          <>
            <Avatar.Image
              style={styles.picture}
              size={250}
              source={{ uri: profilePicture }}
              onLoadStart={() => setImageLoading(true)}
              onLoadEnd={() => setImageLoading(false)}
            />
            <ActivityIndicator
              size="large"
              animating={imageLoading}
              style={styles.imageLoader}
              color={colors.white}
            />
          </>
        ) : (
          <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
            <MaterialIcon
              color={colors.prussianBluePrimary}
              name="cloud-upload"
              size={100}
            />
            <Text style={styles.txt}>Upload a picture</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.listContainer}>
        {!!notes &&
          notes.map((note, index) => (
            <List.Item
              style={styles.listItem}
              titleStyle={[
                styles.listTitle,
                !noteConditionMet(note) && styles.error,
              ]}
              key={index}
              title={note}
              left={(props) =>
                !!note && (
                  <MaterialIcon
                    {...props}
                    name={
                      !noteConditionMet(note) ? "highlight-remove" : "check"
                    }
                    color={!noteConditionMet(note) ? "red" : colors.silver}
                    size={15}
                  />
                )
              }
            />
          ))}
      </View>
      {!!profilePicture && profilePicture?.length > 0 && <View style={styles.actionBtnContainer}>
        <Button
          labelStyle={styles.actionBtnTxt}
          style={[styles.actionBtn, styles.btn1]}
          icon="delete"
          mode="outlined"
          onPress={() => setProfilePicture("")}
        >
          Remove
        </Button>
        <Button
          labelStyle={styles.actionBtnTxt}
          style={[styles.actionBtn, styles.btn2]}
          icon="autorenew"
          mode="outlined"
          onPress={pickImage}
        >
          Change
        </Button>
      </View>}
      <View style={styles.btnContainer}>
        <Button
          labelStyle={styles.btnTxt}
          style={styles.btn}
          icon="account-check"
          mode="contained"
          onPress={handleBtnPress}
          disabled={!areAllConditionsMet()}
        >
          Finish
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
  },
  headingContainer: {
    width: "100%",
    marginHorizontal: 25,
  },
  heading: {
    color: colors.silver,
    fontFamily: "Poppins-Bold",
    fontSize: 26,
  },
  subHeadingContainer: {
    width: "100%",
  },
  subHeading: {
    color: colors.slateGray,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginHorizontal: 25,
    lineHeight: 20,
  },
  pictureContainer: {
    width: "100%",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    marginHorizontal: 25,
    zIndex: 1,
  },
  imageLoader: {
    zIndex: 2,
    position: "absolute",
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btn: {
    width: "89%",
    marginHorizontal: 25,
  },
  btnTxt: {
    color: colors.prussianBluePrimary,
    fontFamily: "Roboto-Bold",
  },
  actionBtnTxt: {
    color: colors.silver,
    fontFamily: "Roboto-Bold"
  },
  listContainer: {
    width: "100%",
    marginHorizontal: 10,
  },
  listTitle: {
    fontFamily: "Roboto-Regular",
    color: colors.silver,
    fontSize: 12,
    marginLeft: -8.5,
  },
  listItem: {
    marginBottom: -20,
  },
  error: {
    color: "red",
  },
  txt: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: colors.prussianBluePrimary,
  },
  uploadBtn: {
    backgroundColor: colors.wisteria,
    borderRadius: 500,
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 25,
  },
  actionBtn: {
    flexGrow: 1
  },
  btn1: {
    marginRight: 4
  },
  btn2: {
    marginLeft: 4
  }
});

export default ProfilePicture;
