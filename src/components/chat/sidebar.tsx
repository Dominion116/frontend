"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DollarSign,
  PiggyBank,
  Target,
  TrendingDown,
  Wallet,
} from "lucide-react";
import type { FinanceContext } from "@/lib/api";

interface SidebarProps {
  financeContext: FinanceContext | null;
}

export function Sidebar({ financeContext }: SidebarProps) {
  if (!financeContext) {
    return (
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-6 px-2">
          <span className="text-xl font-bold font-serif">FinBot</span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center px-4">
            Loading your financial data...
          </p>
        </div>
      </div>
    );
  }

  const { budgets, savingsGoals, totalSpent, totalBudget, monthlyIncome } = financeContext;
  const remainingBudget = totalBudget - totalSpent;

  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-6">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2">
          <span className="text-xl font-bold">FinBot</span>
        </div>

        <Separator />

        {/* Quick Stats */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-2">
            Quick Stats
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <Card className="border-0 shadow-none bg-background">
              <CardContent className="p-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
                  <Wallet className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Monthly Income</p>
                  <p className="font-semibold text-sm">${monthlyIncome.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none bg-background">
              <CardContent className="p-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center">
                  <TrendingDown className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total Spent</p>
                  <p className="font-semibold text-sm">${totalSpent.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none bg-background">
              <CardContent className="p-3 flex items-center gap-3">
                <div className={`h-8 w-8 rounded-md flex items-center justify-center ${remainingBudget >= 0 ? 'bg-accent' : 'bg-destructive/10'}`}>
                  <DollarSign className={`h-4 w-4 ${remainingBudget >= 0 ? 'text-primary' : 'text-destructive'}`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Remaining Budget</p>
                  <p className={`font-semibold text-sm ${remainingBudget < 0 ? 'text-destructive' : ''}`}>
                    ${Math.abs(remainingBudget).toLocaleString()}
                    {remainingBudget < 0 && ' over'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Budget Overview */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-2">
            Budget Overview
          </h3>
          {budgets.length === 0 ? (
            <p className="text-sm text-muted-foreground px-2">
              No budgets set yet. Tell me to set one!
            </p>
          ) : (
            <div className="space-y-3">
              {budgets.map((budget) => {
                const percentage = budget.amount > 0
                  ? Math.min((budget.spent / budget.amount) * 100, 100)
                  : 0;
                const isOverBudget = budget.spent > budget.amount;
                const isNearBudget = percentage >= 80 && !isOverBudget;

                return (
                  <div key={budget.id} className="px-2 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{budget.category}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-muted-foreground">
                          ${budget.spent.toLocaleString()} / ${budget.amount.toLocaleString()}
                        </span>
                        {isOverBudget && (
                          <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                            Over
                          </Badge>
                        )}
                        {isNearBudget && (
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-chart-2/20 text-chart-2">
                            Close
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Progress
                      value={percentage}
                      className={`h-2 ${
                        isOverBudget
                          ? "[&>div]:bg-destructive"
                          : isNearBudget
                          ? "[&>div]:bg-chart-2"
                          : "[&>div]:bg-primary"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Separator />

        {/* Savings Goals */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-2">
            Savings Goals
          </h3>
          {savingsGoals.length === 0 ? (
            <p className="text-sm text-muted-foreground px-2">
              No savings goals yet. Tell me what you&apos;re saving for!
            </p>
          ) : (
            <div className="space-y-3">
              {savingsGoals.map((goal) => {
                const percentage = goal.target_amount > 0
                  ? Math.min((goal.saved_amount / goal.target_amount) * 100, 100)
                  : 0;

                return (
                  <Card key={goal.id} className="border-0 shadow-none bg-background">
                    <CardContent className="p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <PiggyBank className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{goal.name}</span>
                        </div>
                        <Badge variant="outline" className="text-[10px]">
                          {Math.round(percentage)}%
                        </Badge>
                      </div>
                      <Progress value={percentage} className="h-2 [&>div]:bg-primary" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>${goal.saved_amount.toLocaleString()} saved</span>
                        <span>${goal.target_amount.toLocaleString()} goal</span>
                      </div>
                      {goal.deadline && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Target className="h-3 w-3" />
                          <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
