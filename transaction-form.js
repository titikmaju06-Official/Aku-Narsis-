const rowsContainer = document.querySelector("#rowsContainer");
const rowTemplate = document.querySelector("#rowTemplate");
const addRowBtn = document.querySelector("#addRowBtn");
const transactionForm = document.querySelector("#transactionForm");
const transactionDate = document.querySelector("#transactionDate");
const grandTotalDisplay = document.querySelector("#grandTotalDisplay");
const grandTotalSummary = document.querySelector("#grandTotalSummary");
const quantityDisplay = document.querySelector("#quantityDisplay");
const rowCountDisplay = document.querySelector("#rowCountDisplay");

const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function formatCurrency(value) {
  return rupiahFormatter.format(value || 0);
}

function parseNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function addRow(initialData = {}) {
  const fragment = rowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".data-row");

  row.querySelector(".item-name").value = initialData.name || "";
  row.querySelector(".quantity").value = initialData.quantity ?? 1;
  row.querySelector(".unit").value = initialData.unit || "Pcs";
  row.querySelector(".unit-price").value = initialData.price ?? 0;

  rowsContainer.appendChild(fragment);
  recalculateRow(row);
  updateSummary();
}

function recalculateRow(row) {
  const quantity = parseNumber(row.querySelector(".quantity").value);
  const price = parseNumber(row.querySelector(".unit-price").value);
  const total = quantity * price;
  row.querySelector(".line-total").value = formatCurrency(total);
  row.dataset.total = String(total);
  row.dataset.quantity = String(quantity);
}

function updateSummary() {
  const rows = [...rowsContainer.querySelectorAll(".data-row")];
  const grandTotal = rows.reduce((sum, row) => sum + parseNumber(row.dataset.total), 0);
  const quantityTotal = rows.reduce((sum, row) => sum + parseNumber(row.dataset.quantity), 0);

  grandTotalDisplay.textContent = formatCurrency(grandTotal);
  grandTotalSummary.textContent = formatCurrency(grandTotal);
  quantityDisplay.textContent = quantityTotal.toLocaleString("id-ID", { maximumFractionDigits: 2 });
  rowCountDisplay.textContent = String(rows.length);
}

function removeRow(row) {
  if (rowsContainer.querySelectorAll(".data-row").length === 1) {
    row.querySelectorAll("input").forEach((input) => {
      input.value = input.classList.contains("quantity") ? "1" : "0";
    });
    row.querySelector(".item-name").value = "";
    recalculateRow(row);
    updateSummary();
    return;
  }

  row.remove();
  updateSummary();
}

rowsContainer.addEventListener("input", (event) => {
  const row = event.target.closest(".data-row");
  if (!row) return;
  if (event.target.matches(".quantity, .unit-price")) {
    recalculateRow(row);
    updateSummary();
  }
});

rowsContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".row-action");
  if (!button) return;
  removeRow(button.closest(".data-row"));
});

addRowBtn.addEventListener("click", () => {
  addRow();
  rowsContainer.lastElementChild?.querySelector(".item-name").focus();
});

transactionForm.addEventListener("reset", () => {
  window.setTimeout(() => {
    rowsContainer.innerHTML = "";
    addRow();
    updateSummary();
  }, 0);
});

transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateSummary();
});

transactionDate.valueAsDate = new Date();
addRow({ name: "Kertas A4 80gsm", quantity: 2, unit: "Box", price: 65000 });
addRow({ name: "Pulpen Gel Hitam", quantity: 12, unit: "Pcs", price: 8500 });
