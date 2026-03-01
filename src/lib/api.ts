const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Hardcoded dummy userId for now (no auth)
export const DUMMY_USER_ID = "00000000-0000-0000-0000-000000000001";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  amount: number;
  category: string;
  note: string;
  date: string;
  created_at: string;
}

export interface Budget {
  id: string;
  user_id: string;
  category: string;
  amount: number;
  spent: number;
  period_start: string;
  period_end: string;
}

export interface SavingsGoal {
  id: string;
  user_id: string;
  name: string;
  target_amount: number;
  saved_amount: number;
  deadline: string;
  created_at: string;
}

export interface FinanceContext {
  budgets: Budget[];
  transactions: Transaction[];
  savingsGoals: SavingsGoal[];
  totalSpent: number;
  totalBudget: number;
  monthlyIncome: number;
}

export async function sendMessage(
  userId: string,
  message: string,
  conversationHistory: Message[]
): Promise<{ reply: string; updatedTransactions?: Transaction[] }> {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, message, conversationHistory }),
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
}

export async function getFinanceContext(userId: string): Promise<FinanceContext> {
  const res = await fetch(`${API_URL}/api/finance-context/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch finance context");
  return res.json();
}

export async function createBudget(data: {
  userId: string;
  category: string;
  amount: number;
  periodStart: string;
  periodEnd: string;
}) {
  const res = await fetch(`${API_URL}/api/budgets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create budget");
  return res.json();
}

export async function createTransaction(data: {
  userId: string;
  amount: number;
  category: string;
  note: string;
  date: string;
}) {
  const res = await fetch(`${API_URL}/api/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create transaction");
  return res.json();
}

export async function createSavingsGoal(data: {
  userId: string;
  name: string;
  targetAmount: number;
  deadline: string;
}) {
  const res = await fetch(`${API_URL}/api/savings-goals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create savings goal");
  return res.json();
}

export async function updateSavingsGoal(id: string, savedAmount: number) {
  const res = await fetch(`${API_URL}/api/savings-goals/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ savedAmount }),
  });
  if (!res.ok) throw new Error("Failed to update savings goal");
  return res.json();
}
