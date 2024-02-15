export const itemTemplate = (item, element, data) => {
  if (data.type === "background")
    return createBackgroundTemplate(item, element);
  else if (data.itemPart === "planning")
    return createPlanningTemplate(item, element);
  else if (data.itemPart === "predicted")
    return createPredictedTemplate(element);
  else if (data.itemPart === "predicted-zero-variance")
    return createPredictedZeroVarianceTemplate(element);
  else return createGameTemplate(item, element);
};

const createBackgroundTemplate = (item, element) => {
  element.style.backgroundColor = item.color ? `${item.color}40` : "#ffffff40";
  element.style.fontSize = "12px";
  element.style.fontWeight = "500";
  return `<div title="${item.title}">${item.content}<div>`;
};

const createPlanningTemplate = (item, element) => {
  const overflowEl = element.parentNode;
  const rangeEl = overflowEl.parentNode;
  if (overflowEl && rangeEl) {
    overflowEl.className = "planning-box";
    overflowEl.style.backgroundColor = item.color || "#fff";
    rangeEl.style.borderColor = "transparent";
    rangeEl.style.borderRightStyle = "none";
    rangeEl.style.backgroundColor = "transparent";
    rangeEl.style.boxShadow = "none";
  }
  return "";
};

const createPredictedTemplate = (element) => {
  const overflowEl = element.parentNode;
  const rangeEl = overflowEl.parentNode;
  if (overflowEl && rangeEl) {
    rangeEl.style.borderBottomRightRadius = "100px";
    rangeEl.style.borderTopRightRadius = "100px";
    rangeEl.style.borderLeftStyle = "hidden";
    overflowEl.className = "predicted-box";
  }
  return "";
};

const createPredictedZeroVarianceTemplate = (element) => {
  const overflowEl = element.parentNode;
  const rangeEl = overflowEl.parentNode;
  if (overflowEl && rangeEl) {
    rangeEl.style.borderBottomRightRadius = "100px";
    rangeEl.style.borderTopRightRadius = "100px";
    rangeEl.style.borderLeftStyle = "hidden";
    overflowEl.className = "predicted-zero-variance-box";
  }
  return "";
};

const createGameTemplate = (item, element) => {
  const overflowEl = element.parentNode;
  const rangeEl = overflowEl.parentNode;
  if (item.hasPredictedData) {
    rangeEl.style.borderRightStyle = "none";
  }
  if (item.hasUnboundedEndDate) {
    rangeEl.style.borderBottomRightRadius = "100px";
    rangeEl.style.borderTopRightRadius = "100px";
  }
  element.id = `item-${item.id.toString() || ""}`;
  return `<div style="background-color: ${
    item.color || "#fff"
  }" class="game-color">&nbsp;</div>${item.content}  <div class="game-code">${
    item.gameCode
  }</div>`;
};
