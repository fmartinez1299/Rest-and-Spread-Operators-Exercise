/* Task 1: Track Animal Sightings */
function trackSightings(...animals) {
	animals.forEach(animal => console.log(`Sighting: ${animal}`));
  }
  // Example usage:
  trackSightings("Elephant", "Tiger", "Panda"); // Should print each animal sighting
  
  /* Task 2: Merge Habitat Areas */
  const forestHabitats = ["Forest A", "Forest B"];
  const savannahHabitats = ["Savannah C", "Savannah D"];
  const protectedAreas = [...forestHabitats, ...savannahHabitats];
  console.log("Protected Areas:", protectedAreas);
  // Expected output: ["Forest A", "Forest B", "Savannah C", "Savannah D"]
  
  /* Task 3: Update Conservation Status */
  const rhinoStatus = {
	population: 500,
	status: "Endangered"
  };
  const updatedRhinoStatus = { ...rhinoStatus, population: 550, habitat: "Grasslands" };
  console.log("Updated Rhino Status:", updatedRhinoStatus);
  // Expected output: { population: 550, status: "Endangered", habitat: "Grasslands" }
  
  /* Task 4: Catalog Genetic Diversity */
  const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
  };
  const lionProfileWithGenetics = { ...lionProfile, genetics: { diversity: "High", markers: 15 } };
  console.log("Original Lion Profile:", lionProfile);
  console.log("Lion Profile with Genetics:", lionProfileWithGenetics);
  
  // Observations:
  // Changes to nested properties in the "genetics" object will affect only "lionProfileWithGenetics".
  // However, if we had an object nested in "lionProfile", changes to that nested object would affect both profiles, as it's only a shallow copy.
  
  /* Task 5: Analyze Ecosystem Health */
  const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
	  herbivores: "Abundant",
	  carnivores: "Sufficient"
	}
  };
  const copiedEcosystemHealth = { ...ecosystemHealth };
  copiedEcosystemHealth.foodSupply.herbivores = "Decreasing";
  
  console.log("Original Ecosystem Health:", ecosystemHealth);
  console.log("Copied Ecosystem Health:", copiedEcosystemHealth);
  
  // Observations:
  // Since "foodSupply" is a nested object, it is only shallowly copied.
  // Modifying "foodSupply.herbivores" in "copiedEcosystemHealth" also affects "ecosystemHealth" because both references point to the same "foodSupply" object.
  
