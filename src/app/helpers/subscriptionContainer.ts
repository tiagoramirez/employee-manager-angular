import { Subscription } from "rxjs";

export class SubscriptionContainer {
    subscriptions: Subscription[] = [];

    add(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    unsubscribeAll() {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
}