/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { SurveyResult } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function SurveyResultUpdateForm(props) {
  const {
    id: idProp,
    surveyResult: surveyResultModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    comfort1: "",
    comfort2: "",
    comfort3: "",
    comfort4: "",
    comfort5: "",
    comfort6: "",
    comfort7: "",
    comfort8: "",
    comfort9: "",
    comfort10: "",
    comfort11: "",
    comfort12: "",
    temp: "",
    intensity: "",
    heatsources: "",
    humidity: "",
    velocity: "",
    traffic: "",
    greenery: "",
    shading: "",
    material: "",
    imageability: "",
    enclosure: "",
    humanscale: "",
    transparency: "",
    complexity: "",
    safe: "",
    lively: "",
    beautiful: "",
    wealthy: "",
    boring: "",
    depressing: "",
    eatingdrinking: [],
    nature: [],
    community: [],
    walking: [],
    sightseeing: [],
    perception: [],
    functionality: [],
    accessibility: [],
    contact: [],
  };
  const [comfort1, setComfort1] = React.useState(initialValues.comfort1);
  const [comfort2, setComfort2] = React.useState(initialValues.comfort2);
  const [comfort3, setComfort3] = React.useState(initialValues.comfort3);
  const [comfort4, setComfort4] = React.useState(initialValues.comfort4);
  const [comfort5, setComfort5] = React.useState(initialValues.comfort5);
  const [comfort6, setComfort6] = React.useState(initialValues.comfort6);
  const [comfort7, setComfort7] = React.useState(initialValues.comfort7);
  const [comfort8, setComfort8] = React.useState(initialValues.comfort8);
  const [comfort9, setComfort9] = React.useState(initialValues.comfort9);
  const [comfort10, setComfort10] = React.useState(initialValues.comfort10);
  const [comfort11, setComfort11] = React.useState(initialValues.comfort11);
  const [comfort12, setComfort12] = React.useState(initialValues.comfort12);
  const [temp, setTemp] = React.useState(initialValues.temp);
  const [intensity, setIntensity] = React.useState(initialValues.intensity);
  const [heatsources, setHeatsources] = React.useState(
    initialValues.heatsources
  );
  const [humidity, setHumidity] = React.useState(initialValues.humidity);
  const [velocity, setVelocity] = React.useState(initialValues.velocity);
  const [traffic, setTraffic] = React.useState(initialValues.traffic);
  const [greenery, setGreenery] = React.useState(initialValues.greenery);
  const [shading, setShading] = React.useState(initialValues.shading);
  const [material, setMaterial] = React.useState(initialValues.material);
  const [imageability, setImageability] = React.useState(
    initialValues.imageability
  );
  const [enclosure, setEnclosure] = React.useState(initialValues.enclosure);
  const [humanscale, setHumanscale] = React.useState(initialValues.humanscale);
  const [transparency, setTransparency] = React.useState(
    initialValues.transparency
  );
  const [complexity, setComplexity] = React.useState(initialValues.complexity);
  const [safe, setSafe] = React.useState(initialValues.safe);
  const [lively, setLively] = React.useState(initialValues.lively);
  const [beautiful, setBeautiful] = React.useState(initialValues.beautiful);
  const [wealthy, setWealthy] = React.useState(initialValues.wealthy);
  const [boring, setBoring] = React.useState(initialValues.boring);
  const [depressing, setDepressing] = React.useState(initialValues.depressing);
  const [eatingdrinking, setEatingdrinking] = React.useState(
    initialValues.eatingdrinking
  );
  const [nature, setNature] = React.useState(initialValues.nature);
  const [community, setCommunity] = React.useState(initialValues.community);
  const [walking, setWalking] = React.useState(initialValues.walking);
  const [sightseeing, setSightseeing] = React.useState(
    initialValues.sightseeing
  );
  const [perception, setPerception] = React.useState(initialValues.perception);
  const [functionality, setFunctionality] = React.useState(
    initialValues.functionality
  );
  const [accessibility, setAccessibility] = React.useState(
    initialValues.accessibility
  );
  const [contact, setContact] = React.useState(initialValues.contact);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = surveyResultRecord
      ? { ...initialValues, ...surveyResultRecord }
      : initialValues;
    setComfort1(cleanValues.comfort1);
    setComfort2(cleanValues.comfort2);
    setComfort3(cleanValues.comfort3);
    setComfort4(cleanValues.comfort4);
    setComfort5(cleanValues.comfort5);
    setComfort6(cleanValues.comfort6);
    setComfort7(cleanValues.comfort7);
    setComfort8(cleanValues.comfort8);
    setComfort9(cleanValues.comfort9);
    setComfort10(cleanValues.comfort10);
    setComfort11(cleanValues.comfort11);
    setComfort12(cleanValues.comfort12);
    setTemp(cleanValues.temp);
    setIntensity(cleanValues.intensity);
    setHeatsources(cleanValues.heatsources);
    setHumidity(cleanValues.humidity);
    setVelocity(cleanValues.velocity);
    setTraffic(cleanValues.traffic);
    setGreenery(cleanValues.greenery);
    setShading(cleanValues.shading);
    setMaterial(cleanValues.material);
    setImageability(cleanValues.imageability);
    setEnclosure(cleanValues.enclosure);
    setHumanscale(cleanValues.humanscale);
    setTransparency(cleanValues.transparency);
    setComplexity(cleanValues.complexity);
    setSafe(cleanValues.safe);
    setLively(cleanValues.lively);
    setBeautiful(cleanValues.beautiful);
    setWealthy(cleanValues.wealthy);
    setBoring(cleanValues.boring);
    setDepressing(cleanValues.depressing);
    setEatingdrinking(cleanValues.eatingdrinking ?? []);
    setCurrentEatingdrinkingValue("");
    setNature(cleanValues.nature ?? []);
    setCurrentNatureValue("");
    setCommunity(cleanValues.community ?? []);
    setCurrentCommunityValue("");
    setWalking(cleanValues.walking ?? []);
    setCurrentWalkingValue("");
    setSightseeing(cleanValues.sightseeing ?? []);
    setCurrentSightseeingValue("");
    setPerception(cleanValues.perception ?? []);
    setCurrentPerceptionValue("");
    setFunctionality(cleanValues.functionality ?? []);
    setCurrentFunctionalityValue("");
    setAccessibility(cleanValues.accessibility ?? []);
    setCurrentAccessibilityValue("");
    setContact(cleanValues.contact ?? []);
    setCurrentContactValue("");
    setErrors({});
  };
  const [surveyResultRecord, setSurveyResultRecord] = React.useState(
    surveyResultModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SurveyResult, idProp)
        : surveyResultModelProp;
      setSurveyResultRecord(record);
    };
    queryData();
  }, [idProp, surveyResultModelProp]);
  React.useEffect(resetStateValues, [surveyResultRecord]);
  const [currentEatingdrinkingValue, setCurrentEatingdrinkingValue] =
    React.useState("");
  const eatingdrinkingRef = React.createRef();
  const [currentNatureValue, setCurrentNatureValue] = React.useState("");
  const natureRef = React.createRef();
  const [currentCommunityValue, setCurrentCommunityValue] = React.useState("");
  const communityRef = React.createRef();
  const [currentWalkingValue, setCurrentWalkingValue] = React.useState("");
  const walkingRef = React.createRef();
  const [currentSightseeingValue, setCurrentSightseeingValue] =
    React.useState("");
  const sightseeingRef = React.createRef();
  const [currentPerceptionValue, setCurrentPerceptionValue] =
    React.useState("");
  const perceptionRef = React.createRef();
  const [currentFunctionalityValue, setCurrentFunctionalityValue] =
    React.useState("");
  const functionalityRef = React.createRef();
  const [currentAccessibilityValue, setCurrentAccessibilityValue] =
    React.useState("");
  const accessibilityRef = React.createRef();
  const [currentContactValue, setCurrentContactValue] = React.useState("");
  const contactRef = React.createRef();
  const validations = {
    comfort1: [],
    comfort2: [],
    comfort3: [],
    comfort4: [],
    comfort5: [],
    comfort6: [],
    comfort7: [],
    comfort8: [],
    comfort9: [],
    comfort10: [],
    comfort11: [],
    comfort12: [],
    temp: [],
    intensity: [],
    heatsources: [],
    humidity: [],
    velocity: [],
    traffic: [],
    greenery: [],
    shading: [],
    material: [],
    imageability: [],
    enclosure: [],
    humanscale: [],
    transparency: [],
    complexity: [],
    safe: [],
    lively: [],
    beautiful: [],
    wealthy: [],
    boring: [],
    depressing: [],
    eatingdrinking: [],
    nature: [],
    community: [],
    walking: [],
    sightseeing: [],
    perception: [],
    functionality: [],
    accessibility: [],
    contact: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          comfort1,
          comfort2,
          comfort3,
          comfort4,
          comfort5,
          comfort6,
          comfort7,
          comfort8,
          comfort9,
          comfort10,
          comfort11,
          comfort12,
          temp,
          intensity,
          heatsources,
          humidity,
          velocity,
          traffic,
          greenery,
          shading,
          material,
          imageability,
          enclosure,
          humanscale,
          transparency,
          complexity,
          safe,
          lively,
          beautiful,
          wealthy,
          boring,
          depressing,
          eatingdrinking,
          nature,
          community,
          walking,
          sightseeing,
          perception,
          functionality,
          accessibility,
          contact,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            SurveyResult.copyOf(surveyResultRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SurveyResultUpdateForm")}
      {...rest}
    >
      <TextField
        label="Comfort1"
        isRequired={false}
        isReadOnly={false}
        value={comfort1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1: value,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort1 ?? value;
          }
          if (errors.comfort1?.hasError) {
            runValidationTasks("comfort1", value);
          }
          setComfort1(value);
        }}
        onBlur={() => runValidationTasks("comfort1", comfort1)}
        errorMessage={errors.comfort1?.errorMessage}
        hasError={errors.comfort1?.hasError}
        {...getOverrideProps(overrides, "comfort1")}
      ></TextField>
      <TextField
        label="Comfort2"
        isRequired={false}
        isReadOnly={false}
        value={comfort2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2: value,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort2 ?? value;
          }
          if (errors.comfort2?.hasError) {
            runValidationTasks("comfort2", value);
          }
          setComfort2(value);
        }}
        onBlur={() => runValidationTasks("comfort2", comfort2)}
        errorMessage={errors.comfort2?.errorMessage}
        hasError={errors.comfort2?.hasError}
        {...getOverrideProps(overrides, "comfort2")}
      ></TextField>
      <TextField
        label="Comfort3"
        isRequired={false}
        isReadOnly={false}
        value={comfort3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3: value,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort3 ?? value;
          }
          if (errors.comfort3?.hasError) {
            runValidationTasks("comfort3", value);
          }
          setComfort3(value);
        }}
        onBlur={() => runValidationTasks("comfort3", comfort3)}
        errorMessage={errors.comfort3?.errorMessage}
        hasError={errors.comfort3?.hasError}
        {...getOverrideProps(overrides, "comfort3")}
      ></TextField>
      <TextField
        label="Comfort4"
        isRequired={false}
        isReadOnly={false}
        value={comfort4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4: value,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort4 ?? value;
          }
          if (errors.comfort4?.hasError) {
            runValidationTasks("comfort4", value);
          }
          setComfort4(value);
        }}
        onBlur={() => runValidationTasks("comfort4", comfort4)}
        errorMessage={errors.comfort4?.errorMessage}
        hasError={errors.comfort4?.hasError}
        {...getOverrideProps(overrides, "comfort4")}
      ></TextField>
      <TextField
        label="Comfort5"
        isRequired={false}
        isReadOnly={false}
        value={comfort5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5: value,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort5 ?? value;
          }
          if (errors.comfort5?.hasError) {
            runValidationTasks("comfort5", value);
          }
          setComfort5(value);
        }}
        onBlur={() => runValidationTasks("comfort5", comfort5)}
        errorMessage={errors.comfort5?.errorMessage}
        hasError={errors.comfort5?.hasError}
        {...getOverrideProps(overrides, "comfort5")}
      ></TextField>
      <TextField
        label="Comfort6"
        isRequired={false}
        isReadOnly={false}
        value={comfort6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6: value,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort6 ?? value;
          }
          if (errors.comfort6?.hasError) {
            runValidationTasks("comfort6", value);
          }
          setComfort6(value);
        }}
        onBlur={() => runValidationTasks("comfort6", comfort6)}
        errorMessage={errors.comfort6?.errorMessage}
        hasError={errors.comfort6?.hasError}
        {...getOverrideProps(overrides, "comfort6")}
      ></TextField>
      <TextField
        label="Comfort7"
        isRequired={false}
        isReadOnly={false}
        value={comfort7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7: value,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort7 ?? value;
          }
          if (errors.comfort7?.hasError) {
            runValidationTasks("comfort7", value);
          }
          setComfort7(value);
        }}
        onBlur={() => runValidationTasks("comfort7", comfort7)}
        errorMessage={errors.comfort7?.errorMessage}
        hasError={errors.comfort7?.hasError}
        {...getOverrideProps(overrides, "comfort7")}
      ></TextField>
      <TextField
        label="Comfort8"
        isRequired={false}
        isReadOnly={false}
        value={comfort8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8: value,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort8 ?? value;
          }
          if (errors.comfort8?.hasError) {
            runValidationTasks("comfort8", value);
          }
          setComfort8(value);
        }}
        onBlur={() => runValidationTasks("comfort8", comfort8)}
        errorMessage={errors.comfort8?.errorMessage}
        hasError={errors.comfort8?.hasError}
        {...getOverrideProps(overrides, "comfort8")}
      ></TextField>
      <TextField
        label="Comfort9"
        isRequired={false}
        isReadOnly={false}
        value={comfort9}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9: value,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort9 ?? value;
          }
          if (errors.comfort9?.hasError) {
            runValidationTasks("comfort9", value);
          }
          setComfort9(value);
        }}
        onBlur={() => runValidationTasks("comfort9", comfort9)}
        errorMessage={errors.comfort9?.errorMessage}
        hasError={errors.comfort9?.hasError}
        {...getOverrideProps(overrides, "comfort9")}
      ></TextField>
      <TextField
        label="Comfort10"
        isRequired={false}
        isReadOnly={false}
        value={comfort10}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10: value,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort10 ?? value;
          }
          if (errors.comfort10?.hasError) {
            runValidationTasks("comfort10", value);
          }
          setComfort10(value);
        }}
        onBlur={() => runValidationTasks("comfort10", comfort10)}
        errorMessage={errors.comfort10?.errorMessage}
        hasError={errors.comfort10?.hasError}
        {...getOverrideProps(overrides, "comfort10")}
      ></TextField>
      <TextField
        label="Comfort11"
        isRequired={false}
        isReadOnly={false}
        value={comfort11}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11: value,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort11 ?? value;
          }
          if (errors.comfort11?.hasError) {
            runValidationTasks("comfort11", value);
          }
          setComfort11(value);
        }}
        onBlur={() => runValidationTasks("comfort11", comfort11)}
        errorMessage={errors.comfort11?.errorMessage}
        hasError={errors.comfort11?.hasError}
        {...getOverrideProps(overrides, "comfort11")}
      ></TextField>
      <TextField
        label="Comfort12"
        isRequired={false}
        isReadOnly={false}
        value={comfort12}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12: value,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.comfort12 ?? value;
          }
          if (errors.comfort12?.hasError) {
            runValidationTasks("comfort12", value);
          }
          setComfort12(value);
        }}
        onBlur={() => runValidationTasks("comfort12", comfort12)}
        errorMessage={errors.comfort12?.errorMessage}
        hasError={errors.comfort12?.hasError}
        {...getOverrideProps(overrides, "comfort12")}
      ></TextField>
      <TextField
        label="Temp"
        isRequired={false}
        isReadOnly={false}
        value={temp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp: value,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.temp ?? value;
          }
          if (errors.temp?.hasError) {
            runValidationTasks("temp", value);
          }
          setTemp(value);
        }}
        onBlur={() => runValidationTasks("temp", temp)}
        errorMessage={errors.temp?.errorMessage}
        hasError={errors.temp?.hasError}
        {...getOverrideProps(overrides, "temp")}
      ></TextField>
      <TextField
        label="Intensity"
        isRequired={false}
        isReadOnly={false}
        value={intensity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity: value,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.intensity ?? value;
          }
          if (errors.intensity?.hasError) {
            runValidationTasks("intensity", value);
          }
          setIntensity(value);
        }}
        onBlur={() => runValidationTasks("intensity", intensity)}
        errorMessage={errors.intensity?.errorMessage}
        hasError={errors.intensity?.hasError}
        {...getOverrideProps(overrides, "intensity")}
      ></TextField>
      <TextField
        label="Heatsources"
        isRequired={false}
        isReadOnly={false}
        value={heatsources}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources: value,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.heatsources ?? value;
          }
          if (errors.heatsources?.hasError) {
            runValidationTasks("heatsources", value);
          }
          setHeatsources(value);
        }}
        onBlur={() => runValidationTasks("heatsources", heatsources)}
        errorMessage={errors.heatsources?.errorMessage}
        hasError={errors.heatsources?.hasError}
        {...getOverrideProps(overrides, "heatsources")}
      ></TextField>
      <TextField
        label="Humidity"
        isRequired={false}
        isReadOnly={false}
        value={humidity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity: value,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.humidity ?? value;
          }
          if (errors.humidity?.hasError) {
            runValidationTasks("humidity", value);
          }
          setHumidity(value);
        }}
        onBlur={() => runValidationTasks("humidity", humidity)}
        errorMessage={errors.humidity?.errorMessage}
        hasError={errors.humidity?.hasError}
        {...getOverrideProps(overrides, "humidity")}
      ></TextField>
      <TextField
        label="Velocity"
        isRequired={false}
        isReadOnly={false}
        value={velocity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity: value,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.velocity ?? value;
          }
          if (errors.velocity?.hasError) {
            runValidationTasks("velocity", value);
          }
          setVelocity(value);
        }}
        onBlur={() => runValidationTasks("velocity", velocity)}
        errorMessage={errors.velocity?.errorMessage}
        hasError={errors.velocity?.hasError}
        {...getOverrideProps(overrides, "velocity")}
      ></TextField>
      <TextField
        label="Traffic"
        isRequired={false}
        isReadOnly={false}
        value={traffic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic: value,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.traffic ?? value;
          }
          if (errors.traffic?.hasError) {
            runValidationTasks("traffic", value);
          }
          setTraffic(value);
        }}
        onBlur={() => runValidationTasks("traffic", traffic)}
        errorMessage={errors.traffic?.errorMessage}
        hasError={errors.traffic?.hasError}
        {...getOverrideProps(overrides, "traffic")}
      ></TextField>
      <TextField
        label="Greenery"
        isRequired={false}
        isReadOnly={false}
        value={greenery}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery: value,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.greenery ?? value;
          }
          if (errors.greenery?.hasError) {
            runValidationTasks("greenery", value);
          }
          setGreenery(value);
        }}
        onBlur={() => runValidationTasks("greenery", greenery)}
        errorMessage={errors.greenery?.errorMessage}
        hasError={errors.greenery?.hasError}
        {...getOverrideProps(overrides, "greenery")}
      ></TextField>
      <TextField
        label="Shading"
        isRequired={false}
        isReadOnly={false}
        value={shading}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading: value,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.shading ?? value;
          }
          if (errors.shading?.hasError) {
            runValidationTasks("shading", value);
          }
          setShading(value);
        }}
        onBlur={() => runValidationTasks("shading", shading)}
        errorMessage={errors.shading?.errorMessage}
        hasError={errors.shading?.hasError}
        {...getOverrideProps(overrides, "shading")}
      ></TextField>
      <TextField
        label="Material"
        isRequired={false}
        isReadOnly={false}
        value={material}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material: value,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.material ?? value;
          }
          if (errors.material?.hasError) {
            runValidationTasks("material", value);
          }
          setMaterial(value);
        }}
        onBlur={() => runValidationTasks("material", material)}
        errorMessage={errors.material?.errorMessage}
        hasError={errors.material?.hasError}
        {...getOverrideProps(overrides, "material")}
      ></TextField>
      <TextField
        label="Imageability"
        isRequired={false}
        isReadOnly={false}
        value={imageability}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability: value,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.imageability ?? value;
          }
          if (errors.imageability?.hasError) {
            runValidationTasks("imageability", value);
          }
          setImageability(value);
        }}
        onBlur={() => runValidationTasks("imageability", imageability)}
        errorMessage={errors.imageability?.errorMessage}
        hasError={errors.imageability?.hasError}
        {...getOverrideProps(overrides, "imageability")}
      ></TextField>
      <TextField
        label="Enclosure"
        isRequired={false}
        isReadOnly={false}
        value={enclosure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure: value,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.enclosure ?? value;
          }
          if (errors.enclosure?.hasError) {
            runValidationTasks("enclosure", value);
          }
          setEnclosure(value);
        }}
        onBlur={() => runValidationTasks("enclosure", enclosure)}
        errorMessage={errors.enclosure?.errorMessage}
        hasError={errors.enclosure?.hasError}
        {...getOverrideProps(overrides, "enclosure")}
      ></TextField>
      <TextField
        label="Humanscale"
        isRequired={false}
        isReadOnly={false}
        value={humanscale}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale: value,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.humanscale ?? value;
          }
          if (errors.humanscale?.hasError) {
            runValidationTasks("humanscale", value);
          }
          setHumanscale(value);
        }}
        onBlur={() => runValidationTasks("humanscale", humanscale)}
        errorMessage={errors.humanscale?.errorMessage}
        hasError={errors.humanscale?.hasError}
        {...getOverrideProps(overrides, "humanscale")}
      ></TextField>
      <TextField
        label="Transparency"
        isRequired={false}
        isReadOnly={false}
        value={transparency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency: value,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.transparency ?? value;
          }
          if (errors.transparency?.hasError) {
            runValidationTasks("transparency", value);
          }
          setTransparency(value);
        }}
        onBlur={() => runValidationTasks("transparency", transparency)}
        errorMessage={errors.transparency?.errorMessage}
        hasError={errors.transparency?.hasError}
        {...getOverrideProps(overrides, "transparency")}
      ></TextField>
      <TextField
        label="Complexity"
        isRequired={false}
        isReadOnly={false}
        value={complexity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity: value,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.complexity ?? value;
          }
          if (errors.complexity?.hasError) {
            runValidationTasks("complexity", value);
          }
          setComplexity(value);
        }}
        onBlur={() => runValidationTasks("complexity", complexity)}
        errorMessage={errors.complexity?.errorMessage}
        hasError={errors.complexity?.hasError}
        {...getOverrideProps(overrides, "complexity")}
      ></TextField>
      <TextField
        label="Safe"
        isRequired={false}
        isReadOnly={false}
        value={safe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe: value,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.safe ?? value;
          }
          if (errors.safe?.hasError) {
            runValidationTasks("safe", value);
          }
          setSafe(value);
        }}
        onBlur={() => runValidationTasks("safe", safe)}
        errorMessage={errors.safe?.errorMessage}
        hasError={errors.safe?.hasError}
        {...getOverrideProps(overrides, "safe")}
      ></TextField>
      <TextField
        label="Lively"
        isRequired={false}
        isReadOnly={false}
        value={lively}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively: value,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.lively ?? value;
          }
          if (errors.lively?.hasError) {
            runValidationTasks("lively", value);
          }
          setLively(value);
        }}
        onBlur={() => runValidationTasks("lively", lively)}
        errorMessage={errors.lively?.errorMessage}
        hasError={errors.lively?.hasError}
        {...getOverrideProps(overrides, "lively")}
      ></TextField>
      <TextField
        label="Beautiful"
        isRequired={false}
        isReadOnly={false}
        value={beautiful}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful: value,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.beautiful ?? value;
          }
          if (errors.beautiful?.hasError) {
            runValidationTasks("beautiful", value);
          }
          setBeautiful(value);
        }}
        onBlur={() => runValidationTasks("beautiful", beautiful)}
        errorMessage={errors.beautiful?.errorMessage}
        hasError={errors.beautiful?.hasError}
        {...getOverrideProps(overrides, "beautiful")}
      ></TextField>
      <TextField
        label="Wealthy"
        isRequired={false}
        isReadOnly={false}
        value={wealthy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy: value,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.wealthy ?? value;
          }
          if (errors.wealthy?.hasError) {
            runValidationTasks("wealthy", value);
          }
          setWealthy(value);
        }}
        onBlur={() => runValidationTasks("wealthy", wealthy)}
        errorMessage={errors.wealthy?.errorMessage}
        hasError={errors.wealthy?.hasError}
        {...getOverrideProps(overrides, "wealthy")}
      ></TextField>
      <TextField
        label="Boring"
        isRequired={false}
        isReadOnly={false}
        value={boring}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring: value,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.boring ?? value;
          }
          if (errors.boring?.hasError) {
            runValidationTasks("boring", value);
          }
          setBoring(value);
        }}
        onBlur={() => runValidationTasks("boring", boring)}
        errorMessage={errors.boring?.errorMessage}
        hasError={errors.boring?.hasError}
        {...getOverrideProps(overrides, "boring")}
      ></TextField>
      <TextField
        label="Depressing"
        isRequired={false}
        isReadOnly={false}
        value={depressing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing: value,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            value = result?.depressing ?? value;
          }
          if (errors.depressing?.hasError) {
            runValidationTasks("depressing", value);
          }
          setDepressing(value);
        }}
        onBlur={() => runValidationTasks("depressing", depressing)}
        errorMessage={errors.depressing?.errorMessage}
        hasError={errors.depressing?.hasError}
        {...getOverrideProps(overrides, "depressing")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking: values,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            values = result?.eatingdrinking ?? values;
          }
          setEatingdrinking(values);
          setCurrentEatingdrinkingValue("");
        }}
        currentFieldValue={currentEatingdrinkingValue}
        label={"Eatingdrinking"}
        items={eatingdrinking}
        hasError={errors?.eatingdrinking?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("eatingdrinking", currentEatingdrinkingValue)
        }
        errorMessage={errors?.eatingdrinking?.errorMessage}
        setFieldValue={setCurrentEatingdrinkingValue}
        inputFieldRef={eatingdrinkingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Eatingdrinking"
          isRequired={false}
          isReadOnly={false}
          value={currentEatingdrinkingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.eatingdrinking?.hasError) {
              runValidationTasks("eatingdrinking", value);
            }
            setCurrentEatingdrinkingValue(value);
          }}
          onBlur={() =>
            runValidationTasks("eatingdrinking", currentEatingdrinkingValue)
          }
          errorMessage={errors.eatingdrinking?.errorMessage}
          hasError={errors.eatingdrinking?.hasError}
          ref={eatingdrinkingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "eatingdrinking")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature: values,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            values = result?.nature ?? values;
          }
          setNature(values);
          setCurrentNatureValue("");
        }}
        currentFieldValue={currentNatureValue}
        label={"Nature"}
        items={nature}
        hasError={errors?.nature?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("nature", currentNatureValue)
        }
        errorMessage={errors?.nature?.errorMessage}
        setFieldValue={setCurrentNatureValue}
        inputFieldRef={natureRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Nature"
          isRequired={false}
          isReadOnly={false}
          value={currentNatureValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.nature?.hasError) {
              runValidationTasks("nature", value);
            }
            setCurrentNatureValue(value);
          }}
          onBlur={() => runValidationTasks("nature", currentNatureValue)}
          errorMessage={errors.nature?.errorMessage}
          hasError={errors.nature?.hasError}
          ref={natureRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "nature")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community: values,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            values = result?.community ?? values;
          }
          setCommunity(values);
          setCurrentCommunityValue("");
        }}
        currentFieldValue={currentCommunityValue}
        label={"Community"}
        items={community}
        hasError={errors?.community?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("community", currentCommunityValue)
        }
        errorMessage={errors?.community?.errorMessage}
        setFieldValue={setCurrentCommunityValue}
        inputFieldRef={communityRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Community"
          isRequired={false}
          isReadOnly={false}
          value={currentCommunityValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.community?.hasError) {
              runValidationTasks("community", value);
            }
            setCurrentCommunityValue(value);
          }}
          onBlur={() => runValidationTasks("community", currentCommunityValue)}
          errorMessage={errors.community?.errorMessage}
          hasError={errors.community?.hasError}
          ref={communityRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "community")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking: values,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            values = result?.walking ?? values;
          }
          setWalking(values);
          setCurrentWalkingValue("");
        }}
        currentFieldValue={currentWalkingValue}
        label={"Walking"}
        items={walking}
        hasError={errors?.walking?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("walking", currentWalkingValue)
        }
        errorMessage={errors?.walking?.errorMessage}
        setFieldValue={setCurrentWalkingValue}
        inputFieldRef={walkingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Walking"
          isRequired={false}
          isReadOnly={false}
          value={currentWalkingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.walking?.hasError) {
              runValidationTasks("walking", value);
            }
            setCurrentWalkingValue(value);
          }}
          onBlur={() => runValidationTasks("walking", currentWalkingValue)}
          errorMessage={errors.walking?.errorMessage}
          hasError={errors.walking?.hasError}
          ref={walkingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "walking")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing: values,
              perception,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            values = result?.sightseeing ?? values;
          }
          setSightseeing(values);
          setCurrentSightseeingValue("");
        }}
        currentFieldValue={currentSightseeingValue}
        label={"Sightseeing"}
        items={sightseeing}
        hasError={errors?.sightseeing?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("sightseeing", currentSightseeingValue)
        }
        errorMessage={errors?.sightseeing?.errorMessage}
        setFieldValue={setCurrentSightseeingValue}
        inputFieldRef={sightseeingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Sightseeing"
          isRequired={false}
          isReadOnly={false}
          value={currentSightseeingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.sightseeing?.hasError) {
              runValidationTasks("sightseeing", value);
            }
            setCurrentSightseeingValue(value);
          }}
          onBlur={() =>
            runValidationTasks("sightseeing", currentSightseeingValue)
          }
          errorMessage={errors.sightseeing?.errorMessage}
          hasError={errors.sightseeing?.hasError}
          ref={sightseeingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "sightseeing")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception: values,
              functionality,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            values = result?.perception ?? values;
          }
          setPerception(values);
          setCurrentPerceptionValue("");
        }}
        currentFieldValue={currentPerceptionValue}
        label={"Perception"}
        items={perception}
        hasError={errors?.perception?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("perception", currentPerceptionValue)
        }
        errorMessage={errors?.perception?.errorMessage}
        setFieldValue={setCurrentPerceptionValue}
        inputFieldRef={perceptionRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Perception"
          isRequired={false}
          isReadOnly={false}
          value={currentPerceptionValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.perception?.hasError) {
              runValidationTasks("perception", value);
            }
            setCurrentPerceptionValue(value);
          }}
          onBlur={() =>
            runValidationTasks("perception", currentPerceptionValue)
          }
          errorMessage={errors.perception?.errorMessage}
          hasError={errors.perception?.hasError}
          ref={perceptionRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "perception")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality: values,
              accessibility,
              contact,
            };
            const result = onChange(modelFields);
            values = result?.functionality ?? values;
          }
          setFunctionality(values);
          setCurrentFunctionalityValue("");
        }}
        currentFieldValue={currentFunctionalityValue}
        label={"Functionality"}
        items={functionality}
        hasError={errors?.functionality?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("functionality", currentFunctionalityValue)
        }
        errorMessage={errors?.functionality?.errorMessage}
        setFieldValue={setCurrentFunctionalityValue}
        inputFieldRef={functionalityRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Functionality"
          isRequired={false}
          isReadOnly={false}
          value={currentFunctionalityValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.functionality?.hasError) {
              runValidationTasks("functionality", value);
            }
            setCurrentFunctionalityValue(value);
          }}
          onBlur={() =>
            runValidationTasks("functionality", currentFunctionalityValue)
          }
          errorMessage={errors.functionality?.errorMessage}
          hasError={errors.functionality?.hasError}
          ref={functionalityRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "functionality")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility: values,
              contact,
            };
            const result = onChange(modelFields);
            values = result?.accessibility ?? values;
          }
          setAccessibility(values);
          setCurrentAccessibilityValue("");
        }}
        currentFieldValue={currentAccessibilityValue}
        label={"Accessibility"}
        items={accessibility}
        hasError={errors?.accessibility?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("accessibility", currentAccessibilityValue)
        }
        errorMessage={errors?.accessibility?.errorMessage}
        setFieldValue={setCurrentAccessibilityValue}
        inputFieldRef={accessibilityRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Accessibility"
          isRequired={false}
          isReadOnly={false}
          value={currentAccessibilityValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.accessibility?.hasError) {
              runValidationTasks("accessibility", value);
            }
            setCurrentAccessibilityValue(value);
          }}
          onBlur={() =>
            runValidationTasks("accessibility", currentAccessibilityValue)
          }
          errorMessage={errors.accessibility?.errorMessage}
          hasError={errors.accessibility?.hasError}
          ref={accessibilityRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "accessibility")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort1,
              comfort2,
              comfort3,
              comfort4,
              comfort5,
              comfort6,
              comfort7,
              comfort8,
              comfort9,
              comfort10,
              comfort11,
              comfort12,
              temp,
              intensity,
              heatsources,
              humidity,
              velocity,
              traffic,
              greenery,
              shading,
              material,
              imageability,
              enclosure,
              humanscale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eatingdrinking,
              nature,
              community,
              walking,
              sightseeing,
              perception,
              functionality,
              accessibility,
              contact: values,
            };
            const result = onChange(modelFields);
            values = result?.contact ?? values;
          }
          setContact(values);
          setCurrentContactValue("");
        }}
        currentFieldValue={currentContactValue}
        label={"Contact"}
        items={contact}
        hasError={errors?.contact?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("contact", currentContactValue)
        }
        errorMessage={errors?.contact?.errorMessage}
        setFieldValue={setCurrentContactValue}
        inputFieldRef={contactRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Contact"
          isRequired={false}
          isReadOnly={false}
          value={currentContactValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.contact?.hasError) {
              runValidationTasks("contact", value);
            }
            setCurrentContactValue(value);
          }}
          onBlur={() => runValidationTasks("contact", currentContactValue)}
          errorMessage={errors.contact?.errorMessage}
          hasError={errors.contact?.hasError}
          ref={contactRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "contact")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || surveyResultModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || surveyResultModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
