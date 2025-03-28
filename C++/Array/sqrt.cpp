#include<iostream>
using namespace std;
int main(){
    int x ;
    cout<<" Enter a number : ";
    cin>>x;
    if(x<2)
    return x;
    int ans,start=0,end = x;
    if(x<2)
    return x;
    while(start<=end){
       int mid = start + (end-start)/2;
        if(mid == x/mid){
            ans = mid;
            break;
        }
        else if(mid*mid < x){
            ans = mid;
            start = mid+1;
        }
        else end = mid-1;
    }
    cout<<ans;
}