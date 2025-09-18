// CutCurator - Freezer Inventory Management
// Learning Focus: JavaScript basics, DOM manipulation, data structures

// Initial inventory data - stored July 14th, 2025
const initialInventory = [
    // Ground meat
    {id: 1, type: "minced_meat", displayName: "Minced Meat", weight: "600-800g", quantity: 7, storageDate: "2025-07-14", used: 0, category: "ground", notes: ""},
    
    // Ribs & Slow cooking cuts
    {id: 2, type: "short_ribs", displayName: "Short Ribs", weight: "500-600g", quantity: 4, storageDate: "2025-07-14", used: 0, category: "slow", notes: ""},
    {id: 3, type: "nötbog", displayName: "Chuck Roast (Nötbog)", weight: "1.1kg", quantity: 2, storageDate: "2025-07-14", used: 0, category: "slow", notes: ""},
    {id: 4, type: "oxhögrev", displayName: "Beef Shoulder (Oxhögrev)", weight: "1kg", quantity: 2, storageDate: "2025-07-14", used: 0, category: "slow", notes: ""},
    {id: 5, type: "högrev", displayName: "Shoulder Roast (Högrev)", weight: "1.2kg", quantity: 2, storageDate: "2025-07-14", used: 0, category: "slow", notes: ""},
    {id: 6, type: "grytbitar", displayName: "Stew Meat (Grytbitar)", weight: "700g", quantity: 1, storageDate: "2025-07-14", used: 0, category: "slow", notes: ""},
    
    // Steaks & Quick cooking
    {id: 7, type: "nötlägg", displayName: "Beef Round (Nötlägg)", weight: "600g", quantity: 4, storageDate: "2025-07-14", used: 0, category: "quick", notes: ""},
    {id: 8, type: "oxinnanlår", displayName: "Inner Thigh (Oxinnanlår)", weight: "1kg", quantity: 2, storageDate: "2025-07-14", used: 0, category: "quick", notes: ""},
    {id: 9, type: "fransyska", displayName: "Flank Steak (Fransyska)", weight: "800g", quantity: 2, storageDate: "2025-07-14", used: 0, category: "grill", notes: ""},
    {id: 10, type: "oxfile", displayName: "Tenderloin (Oxfile)", weight: "varies", quantity: 1, storageDate: "2025-07-14", used: 0, category: "special", notes: ""},
    {id: 11, type: "ryggbiff", displayName: "Sirloin (Ryggbiff)", weight: "1kg", quantity: 1, storageDate: "2025-07-14", used: 0, category: "grill", notes: ""},
    {id: 12, type: "rostbiff", displayName: "Roast Beef Cut", weight: "690g", quantity: 1, storageDate: "2025-07-14", used: 0, category: "special", notes: ""},
    {id: 13, type: "rostbiff_2", displayName: "Roast Beef Cut", weight: "700g", quantity: 1, storageDate: "2025-07-14", used: 0, category: "special", notes: ""},
    {id: 14, type: "oxytterlår", displayName: "Outer Thigh (Oxytterlår)", weight: "1kg", quantity: 1, storageDate: "2025-07-14", used: 0, category: "quick", notes: ""},
    {id: 15, type: "entrecote", displayName: "Ribeye (Entrecote)", weight: "850g", quantity: 1, storageDate: "2025-07-14", used: 0, category: "special", notes: ""}
];

// Recipe database - linking meat types to recipe suggestions
const recipeDatabase = {
    minced_meat: [
        {name: "Classic Beef Burgers", url: "https://www.allrecipes.com/recipe/49404/juiciest-hamburgers-ever/"},
        {name: "Swedish Meatballs", url: "https://www.allrecipes.com/recipe/16941/actual-swedish-meatballs-kottbullar/"},
        {name: "Beef Tacos", url: "https://www.allrecipes.com/recipe/70786/easy-taco-meat/"},
        {name: "Meat Sauce for Pasta", url: "https://www.allrecipes.com/recipe/23847/moms-famous-meat-sauce/"}
    ],
    short_ribs: [
        {name: "Braised Short Ribs", url: "https://www.allrecipes.com/recipe/22117/fall-off-the-bone-short-ribs/"},
        {name: "Korean Galbi", url: "https://www.maangchi.com/recipe/galbi"},
        {name: "Red Wine Braised Short Ribs", url: "https://www.foodnetwork.com/recipes/ina-garten/company-pot-roast-recipe-1946313"}
    ],
    nötbog: [
        {name: "Slow Cooker Pot Roast", url: "https://www.allrecipes.com/recipe/16821/slow-cooker-pot-roast/"},
        {name: "Chuck Roast with Vegetables", url: "https://www.foodnetwork.com/recipes/alton-brown/pot-roast-recipe-1952408"}
    ],
    oxhögrev: [
        {name: "Beef Shoulder Stew", url: "https://www.allrecipes.com/recipe/14685/slow-cooker-beef-stew-i/"},
        {name: "Pulled Beef Sandwiches", url: "https://www.allrecipes.com/recipe/92462/slow-cooker-shredded-beef/"}
    ],
    högrev: [
        {name: "Sunday Pot Roast", url: "https://www.allrecipes.com/recipe/16821/slow-cooker-pot-roast/"},
        {name: "Beef and Mushroom Stew", url: "https://www.foodnetwork.com/recipes/emeril-lagasse/beef-and-mushroom-stew-recipe-1946647"}
    ],
    grytbitar: [
        {name: "Classic Beef Stew", url: "https://www.allrecipes.com/recipe/14685/slow-cooker-beef-stew-i/"},
        {name: "Beef Bourguignon", url: "https://www.foodnetwork.com/recipes/ina-garten/beef-bourguignon-recipe-1942045"}
    ],
    nötlägg: [
        {name: "Round Steak with Gravy", url: "https://www.allrecipes.com/recipe/16943/round-steak/"},
        {name: "Stir-fried Beef", url: "https://www.allrecipes.com/recipe/128874/quick-beef-stir-fry/"}
    ],
    oxinnanlår: [
        {name: "Marinated Beef Steaks", url: "https://www.allrecipes.com/recipe/143809/simple-marinade-for-steak/"},
        {name: "Beef Fajitas", url: "https://www.allrecipes.com/recipe/70736/beef-fajitas/"}
    ],
    fransyska: [
        {name: "Grilled Flank Steak", url: "https://www.allrecipes.com/recipe/18074/marinated-flank-steak/"},
        {name: "Flank Steak Fajitas", url: "https://www.allrecipes.com/recipe/70736/beef-fajitas/"}
    ],
    oxfile: [
        {name: "Beef Wellington", url: "https://www.foodnetwork.com/recipes/alton-brown/beef-wellington-recipe-1947703"},
        {name: "Filet Mignon", url: "https://www.allrecipes.com/recipe/238782/restaurant-style-filet-mignon/"}
    ],
    ryggbiff: [
        {name: "Grilled Sirloin", url: "https://www.allrecipes.com/recipe/143809/simple-marinade-for-steak/"},
        {name: "Pan-Seared Sirloin", url: "https://www.foodnetwork.com/recipes/alton-brown/pan-seared-rib-eye-recipe-1956776"}
    ],
    rostbiff: [
        {name: "Perfect Roast Beef", url: "https://www.allrecipes.com/recipe/16671/garlic-and-herb-crusted-sirloin-tip-roast/"},
        {name: "Sunday Roast", url: "https://www.foodnetwork.com/recipes/tyler-florence/perfect-roast-beef-recipe-1910112"}
    ],
    rostbiff_2: [
        {name: "Perfect Roast Beef", url: "https://www.allrecipes.com/recipe/16671/garlic-and-herb-crusted-sirloin-tip-roast/"},
        {name: "Sunday Roast", url: "https://www.foodnetwork.com/recipes/tyler-florence/perfect-roast-beef-recipe-1910112"}
    ],
    oxytterlår: [
        {name: "Marinated Beef Steaks", url: "https://www.allrecipes.com/recipe/143809/simple-marinade-for-steak/"},
        {name: "Beef Stir-fry", url: "https://www.allrecipes.com/recipe/128874/quick-beef-stir-fry/"}
    ],
    entrecote: [
        {name: "Perfect Ribeye Steak", url: "https://www.foodnetwork.com/recipes/alton-brown/pan-seared-rib-eye-recipe-1956776"},
        {name: "Grilled Ribeye", url: "https://www.allrecipes.com/recipe/143809/simple-marinade-for-steak/"}
    ]
};

// Cooking style mappings
const cookingStyles = {
    quick: ['minced_meat', 'nötlägg', 'oxinnanlår', 'oxytterlår'],
    slow: ['short_ribs', 'nötbog', 'oxhögrev', 'högrev', 'grytbitar'],
    grill: ['fransyska', 'ryggbiff', 'entrecote'],
    special: ['oxfile', 'rostbiff', 'rostbiff_2', 'entrecote']
};

// Global state
let inventory = [];
let customRecipes = {};
let currentSort = 'name';

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('CutCurator app starting...');
    initializeInventory();
    loadCustomRecipes();
    setupEventListeners();
    displayInventory();
    
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registered successfully');
            })
            .catch(function(error) {
                console.log('Service Worker registration failed');
            });
    }
});

// Load inventory from localStorage or use initial data
function initializeInventory() {
    const savedInventory = localStorage.getItem('cutcurator-inventory');
    if (savedInventory) {
        inventory = JSON.parse(savedInventory);
        // Migrate existing items to include notes field if missing
        inventory = inventory.map(item => ({
            ...item,
            notes: item.notes || ""
        }));
        console.log('Loaded inventory from storage:', inventory.length, 'items');
    } else {
        inventory = [...initialInventory];
        saveInventory();
        console.log('Initialized with fresh inventory:', inventory.length, 'items');
    }
}

// Save inventory to localStorage
function saveInventory() {
    localStorage.setItem('cutcurator-inventory', JSON.stringify(inventory));
    console.log('Inventory saved to storage');
}

// Load custom recipes from localStorage
function loadCustomRecipes() {
    const savedRecipes = localStorage.getItem('cutcurator-custom-recipes');
    if (savedRecipes) {
        customRecipes = JSON.parse(savedRecipes);
        console.log('Loaded custom recipes from storage');
    } else {
        customRecipes = {};
        console.log('No custom recipes found, starting fresh');
    }
}

// Save custom recipes to localStorage
function saveCustomRecipes() {
    localStorage.setItem('cutcurator-custom-recipes', JSON.stringify(customRecipes));
    console.log('Custom recipes saved to storage');
}

// Calculate days in freezer since storage date
function calculateDaysInFreezer(storageDate) {
    const stored = new Date(storageDate);
    const today = new Date();
    const diffTime = Math.abs(today - stored);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Calculate total weight from inventory
function calculateTotalWeight() {
    let totalWeight = 0;
    
    inventory.forEach(item => {
        const availableQuantity = item.quantity - item.used;
        if (availableQuantity > 0) {
            // Extract weight numbers from weight string (e.g., "600g" -> 600, "1.1kg" -> 1100, "600-800g" -> 700)
            const weightStr = item.weight.toLowerCase();
            let weight = 0;
            
            if (weightStr.includes('varies')) {
                weight = 500; // Estimate for variable weights
            } else if (weightStr.includes('-')) {
                // Handle ranges like "600-800g" -> take average
                const parts = weightStr.split('-');
                if (parts.length === 2) {
                    const min = parseFloat(parts[0].replace(/[^0-9.]/g, ''));
                    let max = parseFloat(parts[1].replace(/[^0-9.]/g, ''));
                    
                    // Convert to grams if needed
                    if (parts[1].includes('kg')) {
                        max *= 1000;
                    }
                    if (parts[0].length < parts[1].length && parts[1].includes('kg')) {
                        // First part is probably also kg if second is kg and first is shorter
                        weight = ((min * 1000) + max) / 2;
                    } else {
                        weight = (min + max) / 2;
                    }
                }
            } else if (weightStr.includes('kg')) {
                weight = parseFloat(weightStr.replace(/[^0-9.]/g, '')) * 1000;
            } else if (weightStr.includes('g')) {
                weight = parseFloat(weightStr.replace(/[^0-9.]/g, ''));
            }
            
            totalWeight += weight * availableQuantity;
        }
    });
    
    return totalWeight;
}

// Update statistics display
function updateStats() {
    const availableItems = inventory.filter(item => (item.quantity - item.used) > 0).length;
    const totalWeight = calculateTotalWeight();
    
    // Format weight display
    const weightText = totalWeight >= 1000 ? 
        (totalWeight / 1000).toFixed(1) + 'kg' : 
        Math.round(totalWeight) + 'g';
    
    // Update simple summary at bottom
    const summaryEl = document.getElementById('summary-text');
    if (summaryEl) {
        summaryEl.textContent = `${availableItems} items • ${weightText} total`;
    }
}

// Mobile menu functions
function showMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('hidden');
    menu.classList.add('show');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('show');
    setTimeout(() => {
        menu.classList.add('hidden');
    }, 300);
}

// Sort inventory based on current sort setting
function sortInventory(sortType = currentSort) {
    currentSort = sortType;
    
    inventory.sort((a, b) => {
        switch (sortType) {
            case 'date-oldest':
                return new Date(a.storageDate) - new Date(b.storageDate);
            case 'date-newest':
                return new Date(b.storageDate) - new Date(a.storageDate);
            case 'category':
                if (a.category !== b.category) {
                    return a.category.localeCompare(b.category);
                }
                return a.displayName.localeCompare(b.displayName);
            case 'quantity':
                const aAvailable = a.quantity - a.used;
                const bAvailable = b.quantity - b.used;
                return bAvailable - aAvailable;
            case 'name':
            default:
                return a.displayName.localeCompare(b.displayName);
        }
    });
}

// Display all inventory items
function displayInventory() {
    sortInventory();
    updateStats();
    
    const container = document.getElementById('inventory-container');
    container.innerHTML = '';
    
    inventory.forEach(item => {
        const itemElement = createInventoryItemElement(item);
        container.appendChild(itemElement);
    });
    
    console.log('Displayed', inventory.length, 'inventory items');
}

// Create HTML element for inventory item
function createInventoryItemElement(item) {
    const daysInFreezer = calculateDaysInFreezer(item.storageDate);
    const availableQuantity = item.quantity - item.used;
    
    const itemDiv = document.createElement('div');
    itemDiv.className = `inventory-item ${availableQuantity === 0 ? 'used' : ''}`;
    itemDiv.dataset.id = item.id;
    
    itemDiv.innerHTML = `
        <div class="item-header">
            <div class="item-name">${item.displayName}</div>
            <div class="item-quantity">${availableQuantity}/${item.quantity}</div>
        </div>
        <div class="item-details">
            <div class="item-weight">Weight: ${item.weight}</div>
            <div class="item-storage-date">${daysInFreezer} days in freezer</div>
        </div>
        ${item.notes ? `<div class="item-notes">${item.notes}</div>` : ''}
        <div class="item-actions">
            <button class="btn btn-compact btn-put-back" 
                    onclick="putBackItem(${item.id})" 
                    ${item.used === 0 ? 'disabled' : ''}
                    title="Put back (${item.used} taken)">
                +
            </button>
            <button class="btn btn-compact btn-take-out" 
                    onclick="takeOutItem(${item.id})" 
                    ${availableQuantity === 0 ? 'disabled' : ''}
                    title="Take out (${availableQuantity} left)">
                -
            </button>
            <button class="btn btn-recipes" onclick="showRecipes('${item.type}', '${item.displayName}')">
                Recipes
            </button>
            <button class="btn btn-notes" onclick="toggleNotes(${item.id})" title="Add/Edit notes">
                📝
            </button>
        </div>
    `;
    
    return itemDiv;
}

// Handle taking out an item
function takeOutItem(itemId) {
    const item = inventory.find(i => i.id === itemId);
    if (!item) return;
    
    const availableQuantity = item.quantity - item.used;
    if (availableQuantity > 0) {
        item.used += 1;
        saveInventory();
        displayInventory();
        
        console.log(`Took out 1x ${item.displayName}. ${item.quantity - item.used} remaining.`);
        
        // Show confirmation
        if (item.quantity - item.used === 0) {
            showNotification(`All ${item.displayName} has been used!`, 'success');
        }
    }
}

// Handle putting back an item (undo)
function putBackItem(itemId) {
    const item = inventory.find(i => i.id === itemId);
    if (!item) return;
    
    if (item.used > 0) {
        item.used -= 1;
        saveInventory();
        displayInventory();
        
        console.log(`Put back 1x ${item.displayName}. ${item.quantity - item.used} now available.`);
    }
}

// Show recipes for a specific meat type
function showRecipes(meatType, displayName) {
    const modal = document.getElementById('recipe-modal');
    const title = document.getElementById('recipe-title');
    const list = document.getElementById('recipe-list');
    
    title.textContent = `Recipes for ${displayName}`;
    
    // Get default recipes
    const defaultRecipes = recipeDatabase[meatType] || [];
    
    // Get custom recipes
    const customRecipeList = customRecipes[meatType] || [];
    
    const allRecipes = [...defaultRecipes, ...customRecipeList];
    
    if (allRecipes.length === 0) {
        list.innerHTML = `
            <p>No recipes available for this cut yet.</p>
            <button class="btn btn-add-recipe" onclick="showAddRecipeModal('${meatType}', '${displayName}')">
                Add Your Own Recipe
            </button>
        `;
    } else {
        let recipesHtml = '';
        
        // Add default recipes
        if (defaultRecipes.length > 0) {
            recipesHtml += '<h4 class="recipe-section-title">Suggested Recipes:</h4>';
            recipesHtml += defaultRecipes.map(recipe => `
                <div class="recipe-item">
                    <a href="${recipe.url}" target="_blank" class="recipe-link">
                        ${recipe.name}
                    </a>
                </div>
            `).join('');
        }
        
        // Add custom recipes
        if (customRecipeList.length > 0) {
            recipesHtml += '<h4 class="recipe-section-title">Your Recipes:</h4>';
            recipesHtml += customRecipeList.map((recipe, index) => `
                <div class="recipe-item custom-recipe">
                    <a href="${recipe.url}" target="_blank" class="recipe-link">
                        ${recipe.name}
                    </a>
                    <button class="btn-delete-recipe" onclick="deleteCustomRecipe('${meatType}', ${index})" title="Delete recipe">
                        ✕
                    </button>
                </div>
            `).join('');
        }
        
        recipesHtml += `
            <button class="btn btn-add-recipe" onclick="showAddRecipeModal('${meatType}', '${displayName}')">
                Add Your Own Recipe
            </button>
        `;
        
        list.innerHTML = recipesHtml;
    }
    
    modal.classList.remove('hidden');
    modal.classList.add('show');
}

// Add new cut to inventory
function addNewCut(name, weight, quantity, category) {
    const newId = Math.max(...inventory.map(item => item.id)) + 1;
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    
    const newCut = {
        id: newId,
        type: name.toLowerCase().replace(/\s+/g, '_'),
        displayName: name,
        weight: weight,
        quantity: parseInt(quantity),
        storageDate: today,
        used: 0,
        category: category,
        notes: ""
    };
    
    inventory.push(newCut);
    saveInventory();
    displayInventory();
    
    console.log(`Added new cut: ${name} (${quantity}x ${weight})`);
}

// Close add cut modal
function closeAddCutModal() {
    const modal = document.getElementById('add-cut-modal');
    modal.classList.remove('show');
    modal.classList.add('hidden');
    
    // Reset form
    document.getElementById('add-cut-form').reset();
}

// Setup event listeners for modals and cooking mood
function setupEventListeners() {
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = function() {
            const modal = this.closest('.modal');
            modal.classList.remove('show');
            modal.classList.add('hidden');
        };
    });
    
    // Click outside modal to close
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
            event.target.classList.add('hidden');
        }
    };
    
    // Cooking mood button
    document.getElementById('cooking-mood-btn').onclick = function() {
        const modal = document.getElementById('cooking-mood-modal');
        modal.classList.remove('hidden');
        modal.classList.add('show');
    };
    
    // Add new cut button
    document.getElementById('add-new-cut-btn').onclick = function() {
        const modal = document.getElementById('add-cut-modal');
        modal.classList.remove('hidden');
        modal.classList.add('show');
    };
    
    // Add cut form submission
    document.getElementById('add-cut-form').onsubmit = function(e) {
        e.preventDefault();
        
        const name = document.getElementById('cut-name').value.trim();
        const weight = document.getElementById('cut-weight').value.trim();
        const quantity = document.getElementById('cut-quantity').value;
        const category = document.getElementById('cut-category').value;
        
        if (name && weight && quantity && category) {
            addNewCut(name, weight, quantity, category);
            closeAddCutModal();
            showNotification(`Added ${quantity}x ${name} to inventory!`);
        }
    };
    
    // Add recipe form submission
    document.getElementById('add-recipe-form').onsubmit = function(e) {
        e.preventDefault();
        
        const recipeName = document.getElementById('recipe-name').value.trim();
        const recipeUrl = document.getElementById('recipe-url').value.trim();
        const modal = document.getElementById('add-recipe-modal');
        const meatType = modal.dataset.meatType;
        const displayName = modal.dataset.displayName;
        
        if (recipeName && recipeUrl && meatType) {
            addCustomRecipe(meatType, recipeName, recipeUrl);
            closeAddRecipeModal();
            
            // Refresh the recipe modal to show the new recipe
            showRecipes(meatType, displayName);
            
            showNotification(`Added recipe "${recipeName}" for ${displayName}!`);
        }
    };
    
    // Save notes button
    document.getElementById('save-notes').onclick = function() {
        saveNotes();
    };
    
    // Sort dropdown
    document.getElementById('sort-select').onchange = function() {
        sortInventory(this.value);
        displayInventory();
    };
    
    // Mobile menu button
    document.getElementById('mobile-menu-btn').onclick = function() {
        showMobileMenu();
    };
    
    // Close mobile menu button
    document.getElementById('close-mobile-menu').onclick = function() {
        closeMobileMenu();
    };
    
    // Share inventory button
    document.getElementById('share-inventory-btn').onclick = function() {
        shareInventory();
        closeMobileMenu();
    };
    
    // Import inventory button
    document.getElementById('import-inventory').onclick = function() {
        importInventory();
    };
    
    // Import inventory button in mobile menu
    document.getElementById('import-inventory-btn').onclick = function() {
        showImportModal();
        closeMobileMenu();
    };
    
    // Mobile share button
    document.getElementById('share-btn-mobile').onclick = function() {
        shareInventory();
    };
    
    // Close mobile menu when clicking outside
    document.getElementById('mobile-menu').onclick = function(e) {
        if (e.target === this) {
            closeMobileMenu();
        }
    };
    
    // Desktop action buttons
    const cookingBtnDesktop = document.getElementById('cooking-mood-btn-desktop');
    const addCutBtnDesktop = document.getElementById('add-new-cut-btn-desktop');
    
    if (cookingBtnDesktop) {
        cookingBtnDesktop.onclick = function() {
            const modal = document.getElementById('cooking-mood-modal');
            modal.classList.remove('hidden');
            modal.classList.add('show');
        };
    }
    
    if (addCutBtnDesktop) {
        addCutBtnDesktop.onclick = function() {
            const modal = document.getElementById('add-cut-modal');
            modal.classList.remove('hidden');
            modal.classList.add('show');
        };
    }
    
    // Mood selection buttons - use event delegation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('mood-btn')) {
            const mood = e.target.getAttribute('data-mood');
            console.log('Mood selected:', mood); // Debug
            showCookingRecommendations(mood);
        }
    });
}

// Show cooking recommendations based on mood
function showCookingRecommendations(mood) {
    console.log('showCookingRecommendations called with mood:', mood); // Debug
    const resultsDiv = document.getElementById('mood-results');
    const cutsDiv = document.getElementById('recommended-cuts');
    
    if (!resultsDiv || !cutsDiv) {
        console.error('Required elements not found'); // Debug
        return;
    }
    
    const availableCuts = cookingStyles[mood] || [];
    console.log('Available cuts for', mood, ':', availableCuts); // Debug
    const availableItems = inventory.filter(item => 
        availableCuts.includes(item.type) && (item.quantity - item.used) > 0
    );
    console.log('Available items:', availableItems); // Debug
    
    if (availableItems.length === 0) {
        cutsDiv.innerHTML = '<p>No cuts available for this cooking style right now.</p>';
    } else {
        cutsDiv.innerHTML = availableItems.map(item => {
            const daysInFreezer = calculateDaysInFreezer(item.storageDate);
            return `
                <div class="recommended-item">
                    <strong>${item.displayName}</strong><br>
                    Weight: ${item.weight} | ${item.quantity - item.used} available<br>
                    <small>${daysInFreezer} days in freezer</small>
                </div>
            `;
        }).join('');
    }
    
    resultsDiv.classList.remove('hidden');
}

// Show notes modal
function showNotesModal(itemId) {
    const item = inventory.find(i => i.id === itemId);
    if (!item) return;
    
    const modal = document.getElementById('notes-modal');
    const title = document.getElementById('notes-title');
    const textarea = document.getElementById('notes-textarea');
    const saveBtn = document.getElementById('save-notes');
    
    title.textContent = `Add Notes for ${item.displayName}`;
    textarea.value = item.notes || '';
    
    // Store item ID for later use
    modal.dataset.itemId = itemId;
    
    modal.classList.remove('hidden');
    modal.classList.add('show');
    
    // Focus on textarea
    setTimeout(() => textarea.focus(), 100);
}

// Close notes modal
function closeNotesModal() {
    const modal = document.getElementById('notes-modal');
    modal.classList.remove('show');
    modal.classList.add('hidden');
    
    // Clear textarea
    document.getElementById('notes-textarea').value = '';
}

// Save notes
function saveNotes() {
    const modal = document.getElementById('notes-modal');
    const itemId = parseInt(modal.dataset.itemId);
    const textarea = document.getElementById('notes-textarea');
    const newNotes = textarea.value.trim();
    
    const item = inventory.find(i => i.id === itemId);
    if (item) {
        item.notes = newNotes;
        saveInventory();
        displayInventory();
        closeNotesModal();
        
        if (newNotes) {
            showNotification(`Notes saved for ${item.displayName}`);
        } else {
            showNotification(`Notes cleared for ${item.displayName}`);
        }
        
        console.log(`Updated notes for ${item.displayName}`);
    }
}

// Toggle notes editing for an item (backward compatibility)
function toggleNotes(itemId) {
    showNotesModal(itemId);
}

// Export inventory for sharing
function exportInventory() {
    const exportData = {
        inventory: inventory,
        customRecipes: customRecipes,
        exportDate: new Date().toISOString(),
        appVersion: "1.0"
    };
    
    return JSON.stringify(exportData, null, 2);
}

// Share inventory with family
function shareInventory() {
    const exportData = exportInventory();
    
    if (navigator.share) {
        // Use native sharing if available (mobile)
        navigator.share({
            title: 'CutCurator Inventory',
            text: 'Here\'s our freezer inventory to share with family:',
            files: [new File([exportData], 'cutcurator-inventory.json', { type: 'application/json' })]
        }).catch(err => {
            // Fallback to clipboard
            copyToClipboard(exportData);
        });
    } else {
        // Fallback to clipboard copy
        copyToClipboard(exportData);
    }
}

// Copy data to clipboard
function copyToClipboard(data) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(data).then(() => {
            showNotification('Inventory copied to clipboard! Share with family.');
            showImportInstructions();
        }).catch(err => {
            // Manual copy fallback
            manualCopyFallback(data);
        });
    } else {
        manualCopyFallback(data);
    }
}

// Manual copy fallback
function manualCopyFallback(data) {
    const textarea = document.createElement('textarea');
    textarea.value = data;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Inventory copied! Share with family.');
        showImportInstructions();
    } catch (err) {
        showNotification('Copy failed. Try selecting and copying manually.', 'error');
    }
    
    document.body.removeChild(textarea);
}

// Show import instructions
function showImportInstructions() {
    setTimeout(() => {
        showNotification('Family members can paste this data using the Import button.', 'success');
    }, 2000);
}

// Show import modal
function showImportModal() {
    const modal = document.getElementById('import-modal');
    modal.classList.remove('hidden');
    modal.classList.add('show');
    
    document.getElementById('import-data').focus();
}

// Close import modal
function closeImportModal() {
    const modal = document.getElementById('import-modal');
    modal.classList.remove('show');
    modal.classList.add('hidden');
    
    document.getElementById('import-data').value = '';
}

// Import inventory from family member
function importInventory() {
    const importData = document.getElementById('import-data').value.trim();
    const importMode = document.querySelector('input[name="import-mode"]:checked').value;
    
    if (!importData) {
        showNotification('Please paste the inventory data first.', 'error');
        return;
    }
    
    try {
        const data = JSON.parse(importData);
        
        if (!data.inventory || !Array.isArray(data.inventory)) {
            throw new Error('Invalid inventory data format');
        }
        
        if (importMode === 'replace') {
            // Replace current inventory
            inventory = data.inventory;
            if (data.customRecipes) {
                customRecipes = data.customRecipes;
            }
        } else {
            // Merge inventories
            const existingIds = new Set(inventory.map(item => item.id));
            let newItemsCount = 0;
            
            data.inventory.forEach(importItem => {
                if (!existingIds.has(importItem.id)) {
                    // Assign new ID to avoid conflicts
                    const newId = Math.max(0, ...inventory.map(item => item.id)) + 1;
                    importItem.id = newId;
                    inventory.push(importItem);
                    newItemsCount++;
                }
            });
            
            // Merge custom recipes
            if (data.customRecipes) {
                Object.keys(data.customRecipes).forEach(meatType => {
                    if (!customRecipes[meatType]) {
                        customRecipes[meatType] = [];
                    }
                    
                    data.customRecipes[meatType].forEach(recipe => {
                        // Check if recipe already exists
                        const exists = customRecipes[meatType].some(existing => 
                            existing.name === recipe.name && existing.url === recipe.url
                        );
                        
                        if (!exists) {
                            customRecipes[meatType].push(recipe);
                        }
                    });
                });
            }
            
            showNotification(`Merged ${newItemsCount} new items from family inventory!`);
        }
        
        saveInventory();
        saveCustomRecipes();
        displayInventory();
        closeImportModal();
        
        if (importMode === 'replace') {
            showNotification('Inventory replaced with family data!');
        }
        
    } catch (error) {
        showNotification('Invalid data format. Please check the pasted data.', 'error');
        console.error('Import error:', error);
    }
}

// Show add custom recipe modal
function showAddRecipeModal(meatType, displayName) {
    const modal = document.getElementById('add-recipe-modal');
    const title = document.getElementById('add-recipe-title');
    
    title.textContent = `Add Recipe for ${displayName}`;
    
    // Store the meat type in a data attribute for later use
    modal.dataset.meatType = meatType;
    modal.dataset.displayName = displayName;
    
    modal.classList.remove('hidden');
    modal.classList.add('show');
}

// Close add recipe modal
function closeAddRecipeModal() {
    const modal = document.getElementById('add-recipe-modal');
    modal.classList.remove('show');
    modal.classList.add('hidden');
    
    // Reset form
    document.getElementById('add-recipe-form').reset();
}

// Add custom recipe
function addCustomRecipe(meatType, recipeName, recipeUrl) {
    if (!customRecipes[meatType]) {
        customRecipes[meatType] = [];
    }
    
    const newRecipe = {
        name: recipeName,
        url: recipeUrl
    };
    
    customRecipes[meatType].push(newRecipe);
    saveCustomRecipes();
    
    console.log(`Added custom recipe: ${recipeName} for ${meatType}`);
}

// Show custom confirmation modal
function showConfirmation(title, message, onConfirm) {
    const modal = document.getElementById('confirmation-modal');
    const titleEl = document.getElementById('confirmation-title');
    const messageEl = document.getElementById('confirmation-message');
    const yesBtn = document.getElementById('confirm-yes');
    const noBtn = document.getElementById('confirm-no');
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    // Remove old listeners and add new ones
    const newYesBtn = yesBtn.cloneNode(true);
    const newNoBtn = noBtn.cloneNode(true);
    yesBtn.parentNode.replaceChild(newYesBtn, yesBtn);
    noBtn.parentNode.replaceChild(newNoBtn, noBtn);
    
    document.getElementById('confirm-yes').onclick = function() {
        modal.classList.remove('show');
        modal.classList.add('hidden');
        onConfirm();
    };
    
    document.getElementById('confirm-no').onclick = function() {
        modal.classList.remove('show');
        modal.classList.add('hidden');
    };
    
    modal.classList.remove('hidden');
    modal.classList.add('show');
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const messageEl = document.getElementById('notification-message');
    
    messageEl.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 300);
    }, 3000);
}

// Delete custom recipe
function deleteCustomRecipe(meatType, index) {
    if (customRecipes[meatType] && customRecipes[meatType][index]) {
        const recipeName = customRecipes[meatType][index].name;
        
        showConfirmation(
            'Delete Recipe',
            `Are you sure you want to delete "${recipeName}"?`,
            () => {
                customRecipes[meatType].splice(index, 1);
                
                // Remove the meat type key if no recipes left
                if (customRecipes[meatType].length === 0) {
                    delete customRecipes[meatType];
                }
                
                saveCustomRecipes();
                
                // Refresh the recipe modal
                const modal = document.getElementById('recipe-modal');
                if (modal.classList.contains('show')) {
                    showRecipes(meatType, modal.dataset.displayName || 'Unknown');
                }
                
                showNotification(`Deleted recipe "${recipeName}"`);
                console.log(`Deleted custom recipe: ${recipeName}`);
            }
        );
    }
}

// Expose functions to global scope for onclick handlers
window.takeOutItem = takeOutItem;
window.putBackItem = putBackItem;
window.showRecipes = showRecipes;
window.closeAddCutModal = closeAddCutModal;
window.toggleNotes = toggleNotes;
window.showAddRecipeModal = showAddRecipeModal;
window.closeAddRecipeModal = closeAddRecipeModal;
window.deleteCustomRecipe = deleteCustomRecipe;
window.showNotesModal = showNotesModal;
window.closeNotesModal = closeNotesModal;
window.saveNotes = saveNotes;
window.shareInventory = shareInventory;
window.showImportModal = showImportModal;
window.closeImportModal = closeImportModal;
window.importInventory = importInventory;
window.showMobileMenu = showMobileMenu;
window.closeMobileMenu = closeMobileMenu;